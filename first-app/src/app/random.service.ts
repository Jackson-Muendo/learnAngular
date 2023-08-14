import { Injectable } from '@angular/core';
import { RandomComponent } from './random/random.component';
import {RevComponent} from './rev/rev.component';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RandomService {
  constructor(private http : HttpClient){}
  info1: string[] = ['john kelly', '567','jac@gmail.com' ];
  info2: string[] = ['john kay', '67','jac@gmail.com' ]; 
  info3: string[] = ['john kelly', '567','jac@gmail.com' ];
  user: User[] = [];
  private userupdated = new Subject<User[]>();
  adduser(firstname:string,lastname:string,email:string,password:string,cpassword:string){
    const usera:User = {firstname:firstname,lastname:lastname,email:email,password:password,cpassword:cpassword}
    this.user.push(usera);
    this.userupdated.next([...this.user])
  }
  getuserupdatelistener(){
    return this.userupdated.asObservable();
  }
  getuser(){
    return this.user
  }
  deletes(){
    
  }
  getinf1(){
    return this.info1;
  }
  getinf2(){
    return this.info2;
  }
  getinf3(){
    return this.info3;
  }
 b : number[] = []
  
  
  getNumbers(){
    return [...this.b]
  }
  addinfo(info){
    this.info1.push(info);
    this.info2.push(info);
    this.info3.push(info);
    //return this.info1;
  }
}
