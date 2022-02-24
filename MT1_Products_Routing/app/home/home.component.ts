import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ip13A:string = "/assets/images/ip13 front.jpg"
  ip13B:string = "/assets/images/ip13 front2.png"
  

  constructor() { }

  ngOnInit(): void {
  }

}
