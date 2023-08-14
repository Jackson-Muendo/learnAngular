import { Component } from '@angular/core';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent {
constructor(public rservice: RandomService){}
info1: string[] = [];
info2: string[] = [];
info3: string[] = [];
getinfo1(){
  this.info1 = this.rservice.getinf1()
}
getinfo2(){
  this.info2 = this.rservice.getinf2()
}
getinfo3(){
  this.info3 = this.rservice.getinf3()
}
updateinfo(frm:any){
  this.rservice.addinfo(frm.value.location)
}
}
