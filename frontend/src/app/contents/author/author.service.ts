import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }

  getAuthorDataFromToken() {
    let token = localStorage.getItem('myToken');
    if(token){
      let data = JSON.parse(window.atob(token.split('.')[1]))
      return data;
    }
  }

  getAuthorById(id: any) {
    return this.http.get(environment.baseUrl + `/author/getbyid/${id}`);
  }
}
