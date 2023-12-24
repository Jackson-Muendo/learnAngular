import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.css']
})
export class PredictComponent implements OnInit {
datas:any = []
//matchlist = this.datas[0]['response']
teams:any = []
i:number;
d:any = [];
indexes:any = [];



constructor(private dservice:DataService){}
ngOnInit(){this.getdata()
  
}
getdata(){
  const url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e09052b207msh3795dfb8ebd2ae1p1474ccjsn4e94e577ea3d',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };
  fetch(url,options)
  .then(res=>{res.json()
    .then(data=>{
    this.datas.push(data.response)
    //this.teams.push(this.datas[0].teams)
    console.log(this.datas)
    
    
  })})
  .catch((error)=>{console.log(error)})
  
 
  return [...this.datas]
}
index(arr:any,val:any){
   
   for(this.i=0;this.i<this.datas.length;this.i++)
   {
    if(arr[this.i] === val){this.indexes.push(this.i)}
   }
   return this.indexes
   console.log(this.indexes)

  }
  
  
}




