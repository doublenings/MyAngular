import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
   private numid :string;
   private my_name:string;
  private email:string;

  constructor() { }
private brand : string;
private song : string;

  ngOnInit() {
    this.numid = "58102010809"
    this.my_name = "Tamonwan Rangpeung"
    this.email = "tamonwan.ning@g.swu.ac.th"
    this.brand="BTOB"
    this.song="Missing You"
    }
   
  }


