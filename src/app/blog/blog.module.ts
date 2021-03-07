import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { NewPostComponent } from './new-post/new-post.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [HomeComponent, PostComponent, NewPostComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    HttpClientModule
  ],
  exports: [
    RouterModule
  ]
})
export class BlogModule { }
