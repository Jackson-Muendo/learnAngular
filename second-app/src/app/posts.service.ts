import { Injectable } from '@angular/core';
import {Post} from './post';
import {Subject,map} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts:Post[] = []
  private postsupdated = new Subject<Post[]>();
  constructor(private http: HttpClient) { }
  addposts(title:string,content:string){
    const post = {id:null,title:title,content:content}
    this.http.post<{message:string}>('http://localhost:3000/api/post',post)
    .subscribe((responsedata)=>{
      console.log(responsedata.message)
      this.posts.push(post);
      this.postsupdated.next([...this.posts]);
    })
    
    
  }
  getpostupdatelistener(){
    return this.postsupdated.asObservable();
  }
  getposts(){
     this.http.get<{message : 'fetched succesfully',posts:any}>('http://localhost:3000/api/posts')
    .pipe(map((postdata)=>{
      return postdata.posts.map((post:any)=>{
        return {
          title: post.title,
          content: post.content,
          id: post._id
        }
      })
    }))
     .subscribe((transformedpostdata)=>{
      this.posts= transformedpostdata.posts;
       this.postsupdated.next([...this.posts]);
      // this.posts= postdata.posts;
      // this.postsupdated.next([...this.posts]);
      
      
    })
    
    //return this.posts
  }
  deletepost(postid:string){
    this.http.delete('http://localhost:3000/api/posts/'+postid)
    .subscribe(()=>{
      console.log('deleted')
    })
  }
}
