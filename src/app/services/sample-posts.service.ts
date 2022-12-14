import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SamplePostsService {

  url = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(this.url)
  }

  addPost(data:any) {
    return this.http.post(this.url,data)
  }
}
