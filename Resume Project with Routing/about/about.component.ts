import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  profile:string = "/assets/images/profile.png";
  

  constructor() { }

  ngOnInit(): void {
  }

}
