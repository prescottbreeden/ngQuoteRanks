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

  createAuthorService() {
    this._httpService.createAuthor(this.newAuthor).subscribe(response => {
      if (response['message'] === 'error') {
        if (response['errors'].code === 11000) {
          this.errors = 'Author name must be unique';
        } else {
          this.errors = response['errors']['errors']['name']['message'];
        }
      } else {
        if (response['message'] !== 'error') {
          this._router.navigate(['/authors']);
        }
      }
    });
  }
}
