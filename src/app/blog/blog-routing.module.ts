import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostComponent} from './post/post.component';
import {HomeComponent} from './home/home.component';
import {NewPostComponent} from './new-post/new-post.component';

const routes: Routes = [
  {
    path: 'blog', children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'post/:id', component: PostComponent},
      {path: 'new-post', component: NewPostComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
