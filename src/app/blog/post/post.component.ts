import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  title: string;
  content: string;

  constructor(private route: ActivatedRoute,
              private postService: PostService) { }

  ngOnInit(): void {
    this.getTitle();
    this.getContent();
  }

  getTitle(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.title = routeParams.get('title');
    console.log(this.title);
  }

  getContent(): void {
    this.postService.getPostFile(this.title).subscribe(
      post => {
        this.content = post;
        console.log(post);
      },
      error => {
        console.log('Error on getting post content', error);
      }
    );
  }

}
