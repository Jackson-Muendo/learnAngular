import { Injectable } from '@angular/core';
import {PostModel} from './post.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor() { } 
 private postsupdated = new Subject <PostModel[]>();
 private posts: PostModel[] =[];
  getposts(){
    return [...this.posts];
  };
  addposts(title: string,content: string){
    const post: PostModel = {title:title,content:content};
    this.posts.push(post);
    this.postsupdated.next([...this.posts]);
  };
  getpostsupdatelistener(){
    return this.postsupdated.asObservable();
  }
}
