import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  
  list= [1,2,3,4,5];

  partners: any[] = [{ 
    company: "Microsoft", 
    trademark: "assets/images/microsoft.png",
    sponsorship: "Platinum", 
    website: "https://www.microsoft.com/en-ph",
  },

  { 
    company: "Apple Inc.", 
    trademark: "assets/images/apple.png", 
    sponsorship: "Gold",
    website: "https://www.apple.com/ph/",
  },

  { company: "Amazon", 
    trademark: "assets/images/amazon.png", 
    sponsorship: "Silver", 
    website: "https://www.amazon.com/",
  },

  { company: "Google Inc.",
   trademark: "assets/images/google.png",
   sponsorship: "Bronze",
    website: "https://www.google.com/",
  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
