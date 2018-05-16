import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  addQuote = false;
  errors = '';
  button = 'Add a Quote';
  authorId: string;
  content = '';
  author;



  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      console.log(`The parent params: ${params}`);
      this.authorId = params['id'];
      this.getAuthorService(this.authorId);
    });
  }

  toggleAddQuote() {
    this.addQuote = !this.addQuote;
    this.addQuote ? this.button = 'Return to Quotes' : this.button = 'Add a Quote';
    this.getAuthorService(this.authorId);
  }

  getAuthorService(id) {
    this._httpService.getAuthor(id).subscribe(data => {
      console.log(data);
      this.author = data['data'];
    });
  }

  addQuoteService(id) {
    console.log('clicked add quote');
    this._httpService.editAuthor(id, {$push: {quotes: {content: this.content}}}).subscribe(data => {
      console.log(data);
      if (data['message'] !== 'error') {
        this._router.navigate(['/authors']);
      } else {
        this.errors = data['errors']['errors']['name']['message'];
        console.log(data['errors']['errors']['name']['message']);
      }
      this.toggleAddQuote();
    });
  }

  voteUpService(id) {
    this.author.quotes[id].votes++;
    this._httpService.editAuthor(this.authorId, this.author).subscribe(data => {
      console.log(data);
    });
  }
  voteDownService(id) {
    this.author.quotes[id].votes--;
    this._httpService.editAuthor(this.authorId, this.author).subscribe(data => {
      console.log(data);
    });
  }

  deleteQuoteService(id) {
    console.log('clicked delete quote');
    console.log(this.author.quotes[id]);
    this.author.quotes.splice(id, 1);
    this._httpService.editAuthor(this.authorId, this.author).subscribe(data => {
      console.log(data);
    });
  }
}
