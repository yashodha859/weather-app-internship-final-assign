import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lat:any;
  lon: any;
  weather1: any;
 iconid:any;
 iconurl:any;
  f:any;
  c:any;
 msg:any;
 heart1:any;
 tmin:any;
 tmax:any;
fav:any;
recent:any;
clicked:any;
  constructor(private weatherService: WeatherService ){ }
  ngOnInit(): void {
   this.getLocation();
   
  }
  getLocation(){
    
    if("geolocation" in navigator){
      navigator.geolocation.watchPosition((success)=>{
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;
        this.weatherService.getWeatherDataByCoords(this.lat, this.lon).subscribe(data=>{
          this.weather1=data;
        
         this.c=Math.floor(this.weather1.main.temp);
       this.tmin=  Math.floor (this.weather1.main.temp_min);
       this.tmax=  Math.floor (this.weather1.main.temp_max);
         this.f=Math.floor((this.c*(9/5))+32);
        this.iconid= this.weather1.weather[0].icon
        
        });
        
      })
    }
  }
  clickheart(){
    this.heart1 = document.getElementById('heart');
      this.clicked="yep"
        if(this.heart1.classList.contains('white')){
          this.clicked="nope";
          this.heart1.classList.remove('white');
          this.heart1.classList.add('red');
         // this.heart1.classList.add('white');
          this.heart1.src = 'assets/images/whiteHeart.png';
          this.fav="fav"+this.weather1.name;
          localStorage.removeItem(this.fav)
          
        }else{
         // this.heart1.classList.remove('white');
         this.heart1.classList.remove('red');
           
         this.heart1.classList.add('white');
         console.log("hiiiii")
          this.heart1.src = 'assets/images/redHeart.png';
          let required={
            name: this.weather1.name,
            temp: this.c,
            descri:this.weather1.weather[0].description,
            click:this.clicked,
            faviconid:this.iconid

          }
          this.fav="fav"+this.weather1.name
          let seraialize= JSON.stringify(required)
          localStorage.setItem(this.fav,seraialize)


       
        
       
        }
   
  }
 

}
