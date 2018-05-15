import { ShowAuthorComponent } from "./show-author/show-author.component";
import { EditAuthorComponent } from "./edit-author/edit-author.component";
import { SubmitAuthorComponent } from "./submit-author/submit-author.component";
import { TeapotComponent } from "./teapot/teapot.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: ShowAuthorComponent},
    { path: 'authors', component: ShowAuthorComponent},
    { path: 'authors/new', component: SubmitAuthorComponent},
    { path: 'authors/edit/:id', component: EditAuthorComponent},
    { path: '**', component: TeapotComponent}    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }