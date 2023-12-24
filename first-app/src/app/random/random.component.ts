import { Component,OnInit } from '@angular/core';
import { RandomService } from '../random.service';
import { User } from  '../user';
@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit{
  user : User[] = [];
  constructor(public rservice : RandomService){}
  a : number;
  x : number;
z : number;


b : number[]= [2,3,4];

addNumbers(k){
  const x   =Math.floor((Math.random())*100);
  this.b.push(x);
}
subNumbers(){
  this.b.slice(1)
}
incr(){
 for (let a = 0; a < 10000000; a ++)
 this.z = this.a+=1;  

}
ngOnInit(){
 this.user = this.rservice.getuser();
}
}
