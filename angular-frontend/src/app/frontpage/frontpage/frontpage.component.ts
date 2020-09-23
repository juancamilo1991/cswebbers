import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import * as Rellax from 'Rellax';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
    let rellax = new Rellax('.rellax');
  } 
}
