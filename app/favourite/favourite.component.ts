
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',

})
export class FavouriteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   var keys=[];
   var data= [];
   
   
  
  
    for(var key in localStorage){
      if(key.indexOf("fav")>-1){
        keys.push(key);
        data.push(JSON.parse(localStorage.getItem(key)!))
        
      }
   
     }
     
     var numOfFav:HTMLSpanElement=<HTMLSpanElement>document.getElementById("num")
     numOfFav.innerHTML= data.length+' City added as favourite'

    
     for( var eachdata in data){
   
       var table:HTMLTableElement =<HTMLTableElement>document.getElementById("myTable")
       let newRow = table.insertRow(-1);
       let newCell= newRow.insertCell(0);
     let neText = document.createTextNode(data[eachdata].name) ;
     newCell.appendChild(neText)
// temperature
     let newCell1= newRow.insertCell(1);
     let netemp = document.createTextNode(data[eachdata].temp) ;
     newCell1.appendChild(netemp)
// icon
 let imgname="http://openweathermap.org/img/w/"+data[eachdata].faviconid+".png"
    let neCell2 = newRow.insertCell(2)
    let att = document.createElement("img");
      att.setAttribute('src',imgname)
    neCell2.appendChild(att);

    // description
    let newCell3= newRow.insertCell(3);
    let newdescri = document.createTextNode(data[eachdata].descri) ;
    newCell3.appendChild(newdescri)
// heart
let himgname="assets/images/redHeart.png"
let neCell4 = newRow.insertCell(4)
let heartatt = document.createElement("img");
  heartatt.setAttribute('src',himgname)
neCell4.appendChild(heartatt);
    }
    
   
  

}
remove(){
  alert("are you sure?")
  var keys=[]
  var data=[]
  for(var key in localStorage){
    if(key.indexOf("fav")>-1){
      keys.push(key);  
    }
 
   }
   for(var i in keys){
     
     localStorage.removeItem(keys[i]);
   }
  
}
}
