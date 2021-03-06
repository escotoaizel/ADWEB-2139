import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  
  // Date Pipes
  presentDate = new Date();

  // AsyncPipe
  time = new Observable<string> ((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  // Currency Pipe
  price : number = 20000;

  // Slice Pipe
  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];

  // Decimal Pipe
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;

  // LowerCasePipe
 value = "HAVE A GREAT DAY!";

  constructor() { }

  ngOnInit(): void {
  }

}