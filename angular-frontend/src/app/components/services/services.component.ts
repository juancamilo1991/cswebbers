import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleEvalService } from '../../services/simple-eval.service';
import * as AOS from 'aos';



@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private router: Router, private simpleService: SimpleEvalService) { }

  ngOnInit() {
    AOS.init();
  }

  goToEvaluation(){
    this.router.navigate(['/evaluation']);
    }
    
  }

