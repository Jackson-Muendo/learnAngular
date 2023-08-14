import { Component,EventEmitter, Output } from '@angular/core';
import {RandomService} from '../random.service';
import {User} from '../user'


@Component({
  selector: 'app-rev',
  templateUrl: './rev.component.html',
  styleUrls: ['./rev.component.css']
})
export class RevComponent {
user : User[] = [];
constructor(public rservice : RandomService){}
Submit(form){
  console.log("submitted")
  this.rservice.adduser(form.value.firstname,form.value.lastname,form.value.email,form.value.password,form.value.cpassword);

}
getthem(){
  
  this.user=  this.rservice.getuser()
  return this.user
}
delete(){
  this.user.shift()
}
}
