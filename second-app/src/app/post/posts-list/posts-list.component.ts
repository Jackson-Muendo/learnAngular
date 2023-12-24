import { Component ,OnInit} from '@angular/core';
import {PostsService} from '../../posts.service'
import {Post} from '../../post'
import {Subscription} from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit{
posts:Post[] = [];
private postsub:Subscription;
constructor(public service:PostsService,private http: HttpClient){}
ngOnInit(){
  //this.posts = this.service.getposts();
  this.service.getposts();
  this.postsub = this.service.getpostupdatelistener()
  .subscribe((posts:Post[])=>{
    this.posts = posts;
    console.log(posts)
  })
}
ondelete(postid:string){
  this.service.deletepost(postid)
  
}
}
