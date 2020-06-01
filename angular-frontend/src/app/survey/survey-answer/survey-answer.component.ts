import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-survey-answer',
  templateUrl: './survey-answer.component.html',
  styleUrls: ['./survey-answer.component.css']
})
export class SurveyAnswerComponent implements OnInit {

  constructor(private dataService: DataService) { }

  data: Number;

  ngOnInit() {
    this.dataService.currentResult.subscribe(data => {
       this.data = data,
       error => `something went wrong ${error}`})
}
}
