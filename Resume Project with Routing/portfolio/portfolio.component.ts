import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  mrbeast:string = "/assets/images/MrBeast Site.jpg"
  haulib:string = "/assets/images/haulibrary.png"
  startup:string = "/assets/images/start up.png"
  lacalle:string = "/assets/images/la calle.png"
  restodb:string = "/assets/images/restodb.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
