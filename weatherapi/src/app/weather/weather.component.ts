import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit{
  ngOnInit() {
    this.getforecast()
  }
  getforecast(){
    const url = 'https://forecast9.p.rapidapi.com/rapidapi/forecast/Eldoret/summary/';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'e09052b207msh3795dfb8ebd2ae1p1474ccjsn4e94e577ea3d',
        'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
      }};
  fetch(url,options)
  .then(res=>res.json()
  .then(data=>{console.log(data)}))
}
  
}
