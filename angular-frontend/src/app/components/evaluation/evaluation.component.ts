import { Component, OnInit } from '@angular/core';
import { SimpleEvalService } from '../../services/simple-eval.service';
import {MatListModule} from '@angular/material/list';

import { Evaluation } from '../../evaluation.model';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {


  evaluations: Evaluation[];



  constructor(private simpleService: SimpleEvalService) { }

  ngOnInit() {
    this.fetchfirstQ();
  }

    fetchfirstQ(){
      this.simpleService.getFirstQ()
             .subscribe((data: Evaluation[]) => {
                 this.evaluations = data;
                 console.log('data requested...');
                 console.log(this.evaluations);
             })
          }
      }
