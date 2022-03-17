import { Component, OnInit } from '@angular/core';
import { Observable, of, range, from, fromEvent, filter, interval, Subscriber } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  // Variables declaration
  numbers: number[]=[];
  sum: number=0;

  // Using filter
  filteredNumbers: number[]=[];
  filtered: number=0;

  // Using map
  map: number=0;
  mappedNumbers: number[]=[];

  // API
  apiMessage: any;

  // fromEvent
  counter: number=0;


  ngOnInit(): void {
    const numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

    // Observer
    const observer = {
      next: (num : number) => {this.numbers.push(num); this.sum += num},
      error: (err : any) => console.log(err),
      complete: () => console.log("Observation Completed!")
    };

    // Subscribing
    numbers$.subscribe(observer);

    // Using the Filter Operation
    const filterFn = filter ( (num : number) => num > 5 );
    const filteredNumbers$ = filterFn (numbers$);
    filteredNumbers$.subscribe( (num : number) => { 
    this.filteredNumbers.push(num); this.filtered += num } );

    // Using the Map Operation
    const mapFnc = map ( (num : number) => num + num );
    const mappedNumbers$ = numbers$.pipe(filterFn, mapFnc);
    mappedNumbers$.subscribe( (num : number) => {
    this.mappedNumbers.push(num); this.map += num } );

    // Using Ajax
    const api$ = ajax({
      url: 'https://httpbin.org/delay/1',
      method: 'POST',
      headers: {'Content-Type': 'application/text'},
      body: "Hi! My name is Aizel Escoto."
    });
    // Subscribe to API
    api$.subscribe(res => this.apiMessage = res.request.body);

    // Using fromEvent
    const clickEvent$ = fromEvent (document, 'click');
    clickEvent$.subscribe( () => this.counter++ );

    // Required 1 
   /* const interval$ = interval(1000);
    interval$.subscribe(val => console.log('stream 1 '+ val));
    const click$ = fromEvent (document, 'click');
    click$.subscribe(evt => console.log('Mouse Clicked'+ evt))

    // New Observable
    const new$ = of(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);
    new$.subscribe(x => console.log('New Observable Event '+ x)); */

    
    // Required 2
    const observable = new Observable (subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout( () => {
        subscriber.next(4);
        subscriber.complete(); }, 1000); 
      });

      console.log('just before subscribe');
      observable.subscribe({
        next(x) { console.log('got value ' + x); },
        complete() { console.log('done'); }
      });
      console.log('just after subscribe');

  };

  constructor() { }

}