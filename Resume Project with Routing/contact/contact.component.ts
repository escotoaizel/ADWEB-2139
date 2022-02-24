import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  linkedin:string = "/assets/images/linkedinicon.png/"
  fb:string = "/assets/images/fbicon.png/"
  ig:string = "/assets/images/igicon.png/"
  twt:string = "/assets/images/twticon.png/"

  constructor() { }

  ngOnInit(): void {
  }

}
