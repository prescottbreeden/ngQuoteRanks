import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SubmitAuthorComponent } from './submit-author/submit-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { ShowAuthorComponent } from './show-author/show-author.component';
import { HttpService } from './http.service';
import { AppRoutingModule } from './app-routing.module';
import { TeapotComponent } from './teapot/teapot.component';
import { HttpClientModule } from '@angular/common/http';
import { QuotesComponent } from './quotes/quotes.component';

@NgModule({
  declarations: [
    AppComponent,
    SubmitAuthorComponent,
    EditAuthorComponent,
    ShowAuthorComponent,
    TeapotComponent,
    QuotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
