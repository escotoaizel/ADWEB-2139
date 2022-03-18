import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
  
  employees() {
    return[
      {image: "/assets/images/avatar1.png", id:101, fname: 'Joseph', lname: 'Dizon', email: 'jdizon@hau.edu.ph'},
      {image: "/assets/images/avatar2.png",id:102, fname: 'James', lname: 'Atienza', email: 'jatienza@hau.edu.ph'},
      {image: "/assets/images/avatar3.png",id:103, fname: 'John', lname: 'Cena', email: 'jcena@hau.edu.ph'},
      {image: "/assets/images/avatar4.png",id:104, fname: 'Robert', lname: 'Quintana', email: 'rquintana@hau.edu.ph'},
      {image: "/assets/images/avatar5.png",id:105, fname: 'Aizel', lname: 'Escoto', email: 'alescoto@student.hau.edu.ph'},
    ]
  }
}

