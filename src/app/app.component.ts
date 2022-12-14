import { Component } from '@angular/core';
import {SamplePostsService} from './services/sample-posts.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Services and api integration';
  posts:any;

  constructor(private postService:SamplePostsService) {
    this.postService.getPosts().subscribe(data => {
      console.warn("posts",data)
      this.posts = data
      this.posts = this.posts?.slice(0, 5)
    })
  }

  onSubmit(val:any){
    console.warn("post",val)
    this.postService.addPost(val).subscribe(data => {
      console.warn("post created",data)
    })
  }
}
