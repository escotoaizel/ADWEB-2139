import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  html:string = "/assets/images/html.png"
  js:string = "/assets/images/js.png"
  css:string = "/assets/images/css.png"
  php:string = "/assets/images/php.png"
  mongodb:string = "/assets/images/mongodb.png"
  java:string = "/assets/images/java.png"
  python:string = "/assets/images/python.png"
  adobe:string = "/assets/images/adobe.png"
  ppt:string = "/assets/images/ppt.png"
  canva:string = "/assets/images/canva.png"
  
  constructor() { }

  ngOnInit(): void {
  }

}
