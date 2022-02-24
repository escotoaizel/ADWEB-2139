import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  banner:string = "/assets/images/banner.png"
  icon1:string = "/assets/images/icon1.svg"
  icon2:string = "/assets/images/icon2.svg"

  constructor() { }

  ngOnInit(): void {
  }

}
