import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private route:ActivatedRoute, private weatherService:WeatherService) { }
weather2:any;
c:any;
f:any;
iconid:any;
k:any;
heart1:any
clicked:any;
fav:any;
recent:any;
tmin:any;
 tmax:any;
  ngOnInit(): void {
    
   let city= this.route.snapshot.params['city'];
   
   this.getCity(city);
   

  }
  getCity(city:any){
    this.weatherService.getWeatherDataByCityname(city).subscribe(data=>{
      this.weather2 = data
      this.c=Math.floor(this.weather2.main.temp);
         this.f=Math.floor((this.c*(9/5))+32);
         this.iconid= this.weather2.weather[0].icon
         this.k="recent-search"+this.weather2.name
         this.tmin=  Math.floor (this.weather2.main.temp_min);
       this.tmax=  Math.floor (this.weather2.main.temp_max);
         let required={
          name: this.weather2.name,
          temp: this.c,
          descri:this.weather2.weather[0].description,
          click:"",
          faviconid:this.iconid

        }
        this.recent="recent"+this.weather2.name
        let seraialize= JSON.stringify(required)
        localStorage.setItem(this.recent,seraialize)
        // localStorage.setItem(this.k, this.weather2.name)
    })
     }
     clickheart(){
  
      this.heart1 = document.getElementById('heart');
      
          if(this.heart1.classList.contains('white')){
            console.log("hlooooooo")
           this.clicked="nope";
            this.heart1.classList.remove('white');
            this.heart1.classList.add('red');
           // this.heart1.classList.add('white');
            this.heart1.src = 'assets/images/whiteHeart.png';
            this.fav="fav"+this.weather2.name;
            localStorage.removeItem(this.fav)
            
          }else{
           // this.heart1.classList.remove('white');
           this.clicked="yep";
           this.heart1.classList.remove('red');
           this.heart1.classList.add('white');
            this.heart1.src = 'assets/images/redHeart.png';
            let required={
              name: this.weather2.name,
              temp: this.c,
              descri:this.weather2.weather[0].description,
              click:this.clicked,
              faviconid:this.iconid

            }
            this.fav="fav"+this.weather2.name
            let seraialize= JSON.stringify(required)
            localStorage.setItem(this.fav,seraialize)


            this.recent="recent"+this.weather2.name
            let recentitem =JSON.parse(localStorage.getItem(this.recent)!)
           let favrecentitem ={...recentitem,click:"yep"}
          
           localStorage.setItem(this.recent, JSON.stringify(favrecentitem))
          
          }
          
        }
        }
