import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  USERNAME = 'basharkhan6';
  POST_DIR = 'post';
  THUMBNAIL_DIR = this.POST_DIR + '/thumbnail';
  REPO_NAME = 'Portfolio';
  BRANCH = 'master';
  BASE_API_URL = 'https://api.github.com/repos/' + this.USERNAME + '/' + this.REPO_NAME + '/';
  BASE_DOWNLOAD_URL = 'https://raw.githubusercontent.com/' + this.USERNAME + '/' + this.REPO_NAME
    + '/' + this.BRANCH + '/';

  constructor(private http: HttpClient) { }

  getAllPost(): Observable<any> {
    const postsUrl = this.BASE_API_URL + 'contents/' + this.POST_DIR + '?ref=' + this.BRANCH;
    return this.http.get(postsUrl);
  }

  getPostFile(title: string): Observable<any> {
    const fileUrl = this.BASE_DOWNLOAD_URL + this.POST_DIR + '/' + title + '.html';
    return this.http.get(fileUrl, {responseType: 'text'});
  }

  getPostThumbnailUrl(title: string): string {
    return this.BASE_DOWNLOAD_URL + this.THUMBNAIL_DIR + '/' + title + '.jpg';
  }
}
