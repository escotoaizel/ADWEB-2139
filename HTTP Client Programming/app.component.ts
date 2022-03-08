import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MT1_Products_Routing';
  todaysDate: any;
  componentProperty: any;

  applelogo:string = "/assets/images/applelogo.png"

  constructor(private myservice:MyserviceService){}

  ngOnInit() {
    this.todaysDate = this.myservice.showTodayDate();
    console.log(this.myservice.serviceproperty);
    this.myservice.serviceproperty = "component created"; 
    this.componentProperty = this.myservice.serviceproperty;
  }

}     