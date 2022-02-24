import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  list= [1,2,3,4,5]

  Products = [
    {
      id: "#SHL0001",
      image:  "/assets/images/mb1.png",
      name: "MacBook Air",
      description: "MacBook Air is completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. The longest battery life ever in a MacBook Air. And a silent, fanless design. This much power has never been this ready to go.is flexible."
    },
    {
      id: "#SHL0002",
      image:  "/assets/images/mb2.png",
      name: "MacBook Pro 13inch",
      description: "The Apple M1 chip gives the 13‑inch MacBook Pro speed and power beyond belief. With up to 2.8x CPU performance. Up to 5x the graphics speed. Our most advanced Neural Engine for up to 11x faster machine learning. And up to 20 hours of battery life so you can go all day. It’s our most popular pro notebook, taken to a whole new level."

    },
    {
      id: "#SHL0003",
      image:  "/assets/images/mb3.png",
      name: "MacBook Pro 14 and 16 inch",
      description: "The 2021 MacBook Pro models come in 14.2-inch and 16.2-inch size options and they're equipped with mini-LED displays, more ports, up to 64GB memory, and more powerful Apple silicon chips, the M1 Pro and M1 Max. In short, they are the best MacBook Pro models to date."
    },
    {
      id: "#SHL0004",
      image:  "/assets/images/imac1.png",
      name: "iMac 24inch",
      description: "The new iMac. 7 vibrant colors. Impossibly thin design. 24-inch 4.5K Retina display. The best camera, mics, and speakers in a Mac. Supercharged by M1."
    },
    {
      id: "#SHL0005",
      image:  "/assets/images/imac2.png",
      name: "iMac 27inch",
      description: "The 27‑inch iMac is packed with powerful tools and apps that let you take any idea to the next level. Its superfast processors and graphics, massive memory, and all-flash storage can tackle any workload with ease. And with its advanced audio and video capabilities and stunning 5K Retina display, everything you do is larger than life."
    },
    {
      id: "#SHL0006",
      image:  "/assets/images/13pro.png",
      name: "iPhone 13 Pro",
      description: "The iPhone 13 Pro is dramatically more powerful camera system. A display so responsive, every interaction feels new again. The world’s fastest smartphone chip. Exceptional durability. And a huge leap in battery life."
    },
    {
      id: "#SHL0007",
      image:  "/assets/images/13.png",
      name: "iPhone 13",
      description: "The iPhone 13 features a ceramic shield front, Super Retina XDR display with True Tone and an A15 Bionic chip"
    },
    {
      id: "#SHL0008",
      image:  "/assets/images/12.png",
      name: "iPhone 12",
      description: "A superpowerful chip. 5G speed. An advanced dual‑camera system. A Ceramic Shield front that's tougher than any smartphone glass. And a bright, beautiful OLED display. iPhone 12 has it all — in two great sizes."
    },
    {
      id: "#SHL0009",
      image:  "/assets/images/SE.png",
      name: "iPhone SE",
      description: "iPhone SE packs A13 Bionic, Portrait mode, 4K video, and Touch ID into a 4.7” design. All for our most affordable price."
    },
    {
      id: "#SHL0010",
      image:  "/assets/images/pro.png",
      name: "iPad Pro",
      description: "iPad Pro features the M1 chip, 12.9-inch Liquid Retina XDR display, 11-inch Liquid Retina display, and 5G support."
    },
    {
      id: "#SHL0011",
      image:  "/assets/images/air.png",
      name: "iPad Air",
      description: "The iPad Air is an all-screen design with a stunning 10.9‑inch Liquid Retina display featuring fast, easy, and secure Touch ID powered by the incredibly advanced A14 Bionic."
    },
    {
      id: "#SHL0012",
      image:  "/assets/images/ipad.png",
      name: "iPad",
      description: "iPad is a versatile and capable device that's up to any task, wherever you take it. Explore iPad Pro, iPad Air, iPad, and iPad mini. iPad now comes with the A13 Bionic chip, a 12MP Ultra Wide front camera with Center Stage, True Tone display technology, and 64GB storage."
    },
    {
      id: "#SHL0013",
      image:  "/assets/images/mini.png",
      name: "iPad Mini",
      description: "iPad mini comes in four colors and has a new all-screen design, A15 Bionic chip, 5G capabilities, and pairs with Apple Pencil 2nd generation."
    },
    {
      id: "#SHL0014",
      image:  "/assets/images/ap7.png",
      name: "Apple Watch Series 7",
      description: "The largest, most advanced display yet. Breakthrough health innovations. Most durable Apple Watch ever. And even faster charging."
    },
    {
      id: "#SHL0015",
      image:  "/assets/images/apSE.png",
      name: "Apple Watch SE",
      description: "Apple Watch SE packs a large Retina display, advanced sensors for fitness, and powerful features for both health and safety."
    },
    {
      id: "#SHL0016",
      image:  "/assets/images/ap3.png",
      name: "Apple Watch Series 3",
      description: "The core fitness, heart-monitoring, and connectivity features that make Apple Watch the ultimate device for a healthy life."
    },
    {
      id: "#SHL0017",
      image:  "/assets/images/asec.png",
      name: "AirPods 2nd generation",
      description: "AirPods models deliver an unparalleled wireless experience, from magical setup to high-quality sound. Available with free engraving."
    },
    {
      id: "#SHL0018",
      image:  "/assets/images/athird.png",
      name: "AirPods 3rd generation",
      description: "The all-new AirPods. With spatial audio, longer battery life, and sweat and water resistance. Available with free engraving."
    },
    {
      id: "#SHL0019",
      image:  "/assets/images/apro.png",
      name: "AirPods Pro",
      description: "AirPods Pro deliver Active Noise Cancellation, Transparency mode, and spatial audio — in a customizable fit. Available with free engraving."
    },
    {
      id: "#SHL0020",
      image:  "/assets/images/max.png",
      name: "AirPods Max",
      description: "AirPods Max combine high-fidelity audio with industry-leading Active Noise Cancellation, Adaptive EQ, spatial audio, and free engraving."
    },
    {
      id: "#SHL0021",
      image:  "/assets/images/boxtv.png",
      name: "TV & Home",
      description: "Stream Apple TV+, series and films in 4K High Frame Rate HDR. Watch live sports and news. Play Apple Arcade, and more."
    },

  ]






  constructor() { }

  ngOnInit(): void {
  }

}
