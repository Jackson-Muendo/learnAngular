import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-predictapi',
  templateUrl: './predictapi.component.html',
  styleUrls: ['./predictapi.component.css']
})
export class PredictapiComponent implements OnInit{
info:any = []
fixture:any = []
fix = this.fixture.values()
leagues:any = []
filteredleagues:any = []
league40:any =[]
league243:any=[]


//jsonleagues:any = JSON.stringify(this.leagues)






  ngOnInit() {  
    this.getfixture()
    this.getpredict() 
    //this.getfixtures()
    

}
getpredict(){
const today =new Date()
const from = today.toJSON().slice(0,10)
const next7 = today.getDate() + 7
const day = today.setDate(next7)
const to =  '&to='+ today.toJSON().slice(0,10)
const urlz = 'https://api-football-v1.p.rapidapi.com/v3/fixtures?league=39&season=2023&from='
const urls = 'https://api-football-v1.p.rapidapi.com/v3/fixtures?date='
const url = urlz + from + to;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e09052b207msh3795dfb8ebd2ae1p1474ccjsn4e94e577ea3d',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};
fetch(url,options)
.then((res)=>res.json()
 .then((data)=>{
  this.info.push(data.response)
  this.leagues= this.info[0].map((element:any)=>{return element.league.id})
  this.filteredleagues= new Set(this.leagues)
  console.log(this.filteredleagues)
  console.log(this.info)
  console.log(url)
  }))
 .catch((error)=>{console.log(error)})

}
getfixture(){
const url ='https://api-football-v1.p.rapidapi.com/v3/standings?season=2023&league=39'
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e09052b207msh3795dfb8ebd2ae1p1474ccjsn4e94e577ea3d',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};
fetch(url,options)
.then((res)=>res.json()
 .then((data)=>{
  this.league40.push(data.response[0])
  console.log(this.league40)}))
.catch((errors)=>{console.log(errors)})

}
getfixtures(){
  const url ='https://api-football-v1.p.rapidapi.com/v3/standings?season=2023&league=56'
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e09052b207msh3795dfb8ebd2ae1p1474ccjsn4e94e577ea3d',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };
  fetch(url,options)
  .then((res)=>res.json()
   .then((data)=>{
    this.league243.push(data.response)
    console.log(this.league243)}))
  .catch((errors)=>{console.log(errors)})
  
  }
  
  
  


}

