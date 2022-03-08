import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {

  todaysDate: any;
  newcomponentproperty: any;
  newcomponent = "Entered in newcomponent"
  constructor(private myservice:MyserviceService) { }

  ngOnInit(): void {
    this.todaysDate = this.myservice.showTodayDate()
    this.newcomponentproperty = this.myservice.serviceproperty;
  }

}