import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  header:string = "assets/images/urban.jpg"
  pic1:string = "assets/images/france.jpg"
  pic2:string = "assets/images/seoul.jpg"
  pic3:string = "assets/images/san francisco.jpg"
  pic4:string = "assets/images/boston.jpg"

  countrya = "France";
  countryb = "Seoul";
  countryc = "San Francisco";
  countryd = "Boston";
  

  headertext = "Research Conferences";
  headertext2 = "Join our online events this 2021!";
  joinconference = "Join our Research Conferences around the Globe!";

  constructor() { }
  ngOnInit(): void {
  }

}
