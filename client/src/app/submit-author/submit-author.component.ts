import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-submit-author',
  templateUrl: './submit-author.component.html',
  styleUrls: ['./submit-author.component.css']
})
export class SubmitAuthorComponent {
newAuthor = {
  name: ''
};
errors = '';

  constructor(
    private _httpService: HttpService,
    private _router: Router) { }

  createAuthorService(newAuthor) {
    console.log(newAuthor);
    this._httpService.createAuthor(this.newAuthor).subscribe(data => {
      console.log(data);
      if (data['message'] !== 'error') {
        this._router.navigate(['/authors']);
      } else {
        this.errors = data['errors']['errors']['name']['message'];
        console.log(data['errors']['errors']['name']['message']);
      }
    });
  }

}
