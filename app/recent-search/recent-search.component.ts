import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-search',
  templateUrl: './recent-search.component.html',
  
})
export class RecentSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
      var keys=[];
      var data= [];
      
       for(var key in localStorage){
         if(key.indexOf("recent")>-1){
           keys.push(key);
           data.push(JSON.parse(localStorage.getItem(key)!))
           
         }
      
        }
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
   let himgnamered="assets/images/redHeart.png"
   let himgnamewhite="assets/images/whiteHeart.png"
   let neCell4 = newRow.insertCell(4)
   let heartatt = document.createElement("img");
   if(data[eachdata].click=="yep"){
     heartatt.setAttribute('src',himgnamered)
   }
   else{
    heartatt.setAttribute('src',himgnamewhite)
   }
   neCell4.appendChild(heartatt);
       }
       
  }
remove(){
  var keys=[]
  alert("are you sure?")
  for(var key in localStorage){
    if(key.indexOf("recent")>-1){
      keys.push(key);  
    }
 
   }
   for(var i in keys){
     
     localStorage.removeItem(keys[i]);
   }
}
}
