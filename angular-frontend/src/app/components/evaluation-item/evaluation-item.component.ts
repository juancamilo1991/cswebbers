import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Evaluation } from '../../../app/Evaluation.model';


@Component({
  selector: 'app-evaluation-item',
  templateUrl: './evaluation-item.component.html',
  styleUrls: ['./evaluation-item.component.css']
})

export class EvaluationItemComponent implements OnInit {


  
  @Input() evaluation: Evaluation;
  @Output() radioValue = new EventEmitter<Evaluation>();

  constructor() { }

  ngOnInit() {
  }

  saveButtonValue(evaluation){
      this.radioValue.emit(evaluation);
      console.log("selected");
      console.log(evaluation);
    };


}
