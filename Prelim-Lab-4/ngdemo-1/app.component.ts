import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Data Binding';

  //String/Number Binding
  topic = "Interpolation";
  tutorial = 101;

  //Property Binding
  studname:string = "Aizel Escoto";

  //Style Binding
  appliedStyle = "green";
  notappliedStyle = false;
  myColor = "red";

  //Class Binding
  appliedCSSClass = "green";
  notappliedCSSClass = true;

  //Event Binding
  showData($event: any){
    console.log("Button is clicked!"); 
    if($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
  getData(data:any){
    console.warn(data);
  }
  
  
}