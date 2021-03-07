import { Component, OnInit } from '@angular/core';
import {PostService} from '../../service/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: {
    title: '',
    url: ''
  } [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getAllPost();
  }

  getAllPost(): void {
    this.postService.getAllPost().subscribe(
      data => {
        this.posts = data.map(post => ({
          title: post.name.replace('.md', ''),
          url: post.download_url
        }));
      },
      error => {
        console.log('Error on getting all post', error);
      }
    );
  }

}
