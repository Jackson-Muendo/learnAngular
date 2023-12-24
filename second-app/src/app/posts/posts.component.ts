import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  constructor(public service:PostsService){}
  addpost(form:NgForm){
    this.service.addposts(form.value.title,form.value.content);
  }
}
