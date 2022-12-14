import { Component } from '@angular/core';
import {SamplePostsService} from "../services/sample-posts.service"

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  posts:any;

  constructor(private postService:SamplePostsService){
    this.postService.getPosts().subscribe(data => {
      this.posts = data
      this.posts = this.posts?.slice(-5)
    })
  }

}
