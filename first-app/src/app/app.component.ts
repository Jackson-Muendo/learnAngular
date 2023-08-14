import { Component } from '@angular/core';
import {PostModel} from './posts/post.model';
import {User} from './user'
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  users : User[] = []
  ongetuser(user){
    this.users.push(user)
  }
  
}
