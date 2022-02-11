import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DirectivesDemo';

  //ngIf Statement
  isLogIn:boolean = false;
  isLogOut:boolean = true;

  //ngFor Statement
  list = [1, 2, 3, 4, 5];

  //ngFor Statement using trackBy
  studentArr: any[] = [
    {"id": 1, "name": "student1"},
    {"id": 2, "name": "student2"},
    {"id": 3, "name": "student3"},
    {"id": 4, "name": "student4"}
  ]
  trackByData(index:number, studentArr:any): number
  {
    return studentArr.id;
  }
  
     //ngFor Statement (Angular - Display a list items)
     candidates = [
      { firstname: "Leni", lastname: "Robredo", email: "leni.robredo@gmail.com", role: "Vice Pres."},
      { firstname: "Bongbong", lastname: "Marcos", email: "bongbong.marcos@gmial.com", role: "Senator"},
      { firstname: "Ping", lastname: "Lacson", email: "ping.lacson@gmail.com", role: "Senator"},
      { firstname: "Manny", lastname: "Pacquiao", email: "manny.pacquiao@gmail.com", role: "Senator"},
      { firstname: "Isko", lastname: "Moreno", email: "isko.moreno@gmail.com", role: "Mayor"},
      
    ];
    
    //Switch Statement
    logInName = 'admin';
}
