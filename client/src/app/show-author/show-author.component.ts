import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-show-author',
  templateUrl: './show-author.component.html',
  styleUrls: ['./show-author.component.css']
})
export class ShowAuthorComponent implements OnInit {
  authors: any = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAllAuthorService();
  }

  getAllAuthorService() {
    this._httpService.getAllAuthor().subscribe(data => {
      console.log(data);
      this.authors = data['data'];
    });
  }

  getAuthorService(id) {
    this._httpService.getAuthor(id).subscribe(data => {
      console.log(data);
    });
  }

  deleteAuthorService(id) {
    this._httpService.deleteAuthor(id).subscribe(data => {
      console.log(data);
      this.getAllAuthorService();
    });
  }

}
