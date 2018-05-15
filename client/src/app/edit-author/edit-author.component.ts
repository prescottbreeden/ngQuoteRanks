import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
authorId = '';
editAuthor = {
  name: ''
};
errors = '';

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      console.log(`The parent params: ${params}`);
      this.getAuthorService(params['id']);
      this.authorId = params['id'];
    });
  }

  getAuthorService(id: string) {
    this._httpService.getAuthor(id).subscribe(data => {
        if (data['message'] === 'success') {
          this.editAuthor = data['data'];
        } else {
          console.log(data);
        }
      });
  }

  editAuthorService(id: string) {
    this._httpService.editAuthor(this.authorId, this.editAuthor).subscribe(data => {
      console.log(data);
      this._router.navigate(['/authors']);
    });
  }

}
