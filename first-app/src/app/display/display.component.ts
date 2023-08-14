import { Component ,Input ,OnDestroy,OnInit} from '@angular/core';
import {RandomService } from '../random.service';
import {User} from '../user'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit,OnDestroy{
userz : User[] = []
private usersub: Subscription;
constructor(public rservice : RandomService){}
ngOnInit(){
  this.userz = this.rservice.getuser();
  this.usersub = this.rservice.getuserupdatelistener().
  subscribe((userz: User[])=>{
this.userz = userz;
  });
}
ngOnDestroy(){
  this.usersub.unsubscribe();
}

}
