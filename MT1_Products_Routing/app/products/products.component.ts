import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  macbook1:string = "/assets/images/mb1.png"
  macbook2:string = "/assets/images/mb2.png"
  macbook3:string = "/assets/images/mb3.png"
  imac1:string = "/assets/images/imac1.png"
  imac2:string = "/assets/images/imac2.png"

  ip12:string = "/assets/images/12.jpg"
  ip13:string = "/assets/images/13.jpg"
  ip13pro:string = "/assets/images/13pro.jpg"
  ipSE:string = "/assets/images/SE.png"

  air:string = "/assets/images/air.png"
  ipad:string = "/assets/images/ipad.png"
  pro:string = "/assets/images/pro.png"
  mini:string = "/assets/images/mini.png"

  app3:string = "/assets/images/ap3.jpg"
  app7:string = "/assets/images/ap7.jpg"
  appSE:string = "/assets/images/apSE.jpg"

  apro:string = "/assets/images/apro.png"
  secgen:string = "/assets/images/asec.png"
  thirdgen:string = "/assets/images/athird.png"
  amax:string = "/assets/images/max.png"

  blogo:string = "/assets/images/blacklogo.png"
  tv:string = "/assets/images/box.png"

  constructor() { }

  ngOnInit(): void {
  }

}
