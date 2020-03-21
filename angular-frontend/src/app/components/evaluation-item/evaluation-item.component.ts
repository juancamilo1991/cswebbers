import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Evaluation } from '../../../app/Evaluation.model';


@Component({
  selector: 'app-evaluation-item',
  templateUrl: './evaluation-item.component.html',
  styleUrls: ['./evaluation-item.component.css']
})

export class EvaluationItemComponent implements OnInit {


  
  @Input() evaluation: Evaluation;
  @Output() radioValue = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  saveButtonValue(event){
      this.radioValue.emit(event.target.value);
      console.log("selected");
      console.log(event.target.value);
    };


}
