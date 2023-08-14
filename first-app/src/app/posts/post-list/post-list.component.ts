import { Component,Input ,OnInit,OnDestroy} from '@angular/core';
import {PostModel} from '../post.model';
import {PostsService} from '../posts.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit , OnDestroy{
  
  posts: PostModel[] = [];
  private postsub: Subscription;
  constructor(public postservice: PostsService){
    
  }

  ngOnInit(){
    this.posts = this.postservice.getposts();
    this.postsub = this.postservice.getpostsupdatelistener().
    subscribe((posts: PostModel[])=>{
      this.posts =posts;
    });
  }
  ngOnDestroy(){
    this.postsub.unsubscribe();
  }

}
