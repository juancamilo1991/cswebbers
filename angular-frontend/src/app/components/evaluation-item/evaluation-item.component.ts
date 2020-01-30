import { Component, OnInit, Input } from '@angular/core';
import { Evaluation } from '../../../app/Evaluation.model';

@Component({
  selector: 'app-evaluation-item',
  templateUrl: './evaluation-item.component.html',
  styleUrls: ['./evaluation-item.component.css']
})
export class EvaluationItemComponent implements OnInit {

  @Input() evaluation: Evaluation;

  constructor() { }

  ngOnInit() {
  }

  /*
    setClasses(){
      let classes = {
        evaluation: this.evaluation.description == 'Answer',
        question: this.evaluation.description == 'Question'
      }
      return classes;
    }
    */

}
