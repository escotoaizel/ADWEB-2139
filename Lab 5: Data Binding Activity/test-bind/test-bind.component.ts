import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-bind',
  templateUrl: './test-bind.component.html',
  styleUrls: ['./test-bind.component.css']
})
export class TestBindComponent implements OnInit {


  //ADWEB
  studName1 = "";
  studNum1 = 0;
  prelim1 = 0;
  midterm1 = 0;
  final1 = 0;

  //CLOUDCOMPUTING
  studName2 = "";
  studNum2 = 0;
  prelim2 = 0;
  midterm2 = 0;
  final2 = 0;

  //APPDEV
  studName3 = "";
  studNum3 = 0;
  prelim3 = 0;
  midterm3 = 0;
  final3 = 0;

  //WEBDEVFOL
  studName4 = "";
  studNum4 = 0;
  prelim4 = 0;
  midterm4 = 0;
  final4 = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
