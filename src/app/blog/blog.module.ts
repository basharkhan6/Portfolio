import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { NewPostComponent } from './new-post/new-post.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [HomeComponent, PostComponent, NewPostComponent],
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class BlogModule { }
