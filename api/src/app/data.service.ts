import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
teamsdata :string[] = []
constructor() { }
async getdata(){
  const url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e09052b207msh3795dfb8ebd2ae1p1474ccjsn4e94e577ea3d',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };
  fetch(url,options)
  .then(response=>{response.json()
    .then(data=>{
    this.teamsdata.push(data)
    console.log(data)})})
  .catch((error)=>{console.log(error)})
  
 
  return [...this.teamsdata]
}


}
