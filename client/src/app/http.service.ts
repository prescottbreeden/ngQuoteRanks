import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  }

  getAllAuthor() {
    return this._http.get('/api/authors');
  }

  uniqueCheck(name) {
    return this._http.get(`/api/authors/${name}`);
  }
  getAuthor(id) {
    return this._http.get(`/api/authors/${id}`);
  }

  createAuthor(newAuthor) {
    return this._http.post('/api/authors/', newAuthor);
  }

  editAuthor(id: string, editedAuthor) {
    return this._http.put(`/api/authors/${id}`, editedAuthor);
  }

  completeAuthor(id: string, completedAuthor) {
    return this._http.put(`/api/authors/${id}`, completedAuthor);
  }

  deleteAuthor(id: string) {
    return this._http.delete(`/api/authors/` + id);
  }
}
