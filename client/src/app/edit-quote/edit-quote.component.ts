import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-quote',
  templateUrl: './edit-quote.component.html',
  styleUrls: ['./edit-quote.component.css']
})
export class EditQuoteComponent implements OnInit {
content = '';
errors = '';
authorId;
quoteIdx;
editAuthor: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

    ngOnInit() {
      this._route.params.subscribe(params => {
        this.authorId = params['id'];
        this.quoteIdx = params['idx'];
        this.getAuthorService(params['id']);
      });
    }

    getAuthorService(id: string) {
      this._httpService.getAuthor(id).subscribe(data => {
          if (data['message'] === 'success') {
            this.editAuthor = data['data'];
            this.content = data['data']['quotes'][this.quoteIdx].content;
          } else {
            console.log('derp: ', data['data']);
          }
        });
    }

    editAuthorService(id: string) {
      this.editAuthor.quotes[this.quoteIdx].content = this.content;
      this._httpService.editAuthor(this.authorId, this.editAuthor).subscribe(data => {
        console.log(data);
        this._router.navigate([`/authors/quotes/${this.authorId}`]);
      });
    }
}
