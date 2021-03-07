import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  USERNAME = 'basharkhan6';
  DIR_NAME = 'post';
  REPO_NAME = 'Portfolio';
  BRANCH = 'master';
  BASE_API_URL = 'https://api.github.com/repos/' + this.USERNAME + '/' + this.REPO_NAME + '/';
  BASE_DOWNLOAD_URL = 'https://raw.githubusercontent.com/' + this.USERNAME + '/' + this.REPO_NAME
    + '/' + this.BRANCH + '/' + this.DIR_NAME + '/';

  constructor(private http: HttpClient) { }

  getAllPost(): Observable<any> {
    const postsUrl = this.BASE_API_URL + 'contents/' + this.DIR_NAME + '?ref=' + this.BRANCH;
    return this.http.get(postsUrl);
  }

  getPostFile(title: string): Observable<any> {
    const fileUrl = this.BASE_DOWNLOAD_URL + title + '.md';
    return this.http.get(fileUrl, {responseType: 'text'});
  }
}
