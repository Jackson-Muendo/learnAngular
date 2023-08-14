import { Component,EventEmitter,Output } from '@angular/core';
import {PostModel} from '../post.model';
import {NgForm} from '@angular/forms'
import {PostsService} from '../posts.service'
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredtitle="";
  enteredcontent="";
  //newpost="this jackmaster";
  @Output() postCreated = new EventEmitter <PostModel>();
  constructor(public postservice: PostsService){}
  onAddPost(form:NgForm){
    if(form.invalid){
      return;
    }
    this.postservice.addposts(form.value.title,form.value.content)
  const post: PostModel= {
    title:form.value.title,
    content:form.value.content
  };
  this.postCreated.emit(post);
  }

}
