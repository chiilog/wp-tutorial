import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../../interfaces/wordpress';

/*
  Generated class for the WordpressProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WordpressProvider {

  constructor(public http: HttpClient) {
    console.log('Hello WordpressProvider Provider');
  }

  getPosts() {
    return this.http.get<Post[]>('https://chiilog.com/wp-json/wp/v2/posts')
  }

  getArticle(id: number) {
    return this.http.get<Post>('https://chiilog.com/wp-json/wp/v2/posts/' + id)
  }

}
