import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private http: HttpClient) { }

  getAllArticles() {
    return this.http.get(environment.baseUrl+'/article/all');
  }

  getLatestArticle() {
    return this.http.get(environment.baseUrl+'/article/latest');
  }
}