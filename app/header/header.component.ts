import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html' ,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

constructor(private weatherService: WeatherService ){ }
  ngOnInit(): void {
    // this.searchCitys.communicateMessage(this.weather2);dateTime:Date
  

    
  }
  dateTime = new Date()
weather2:any;
navbarOpen = false;
cityWeather:any;
toggleNavbar() {
  this.navbarOpen = !this.navbarOpen;
}

 getCity(city:any){
this.weatherService.getWeatherDataByCityname(city).subscribe(data=>{
  this.weather2 = data
 
this.weatherService.communicateMessage(this.weather2)
alert("hey")
})
 } 

 input:any;
sendit(data:any){
  this.input=data;
}
}