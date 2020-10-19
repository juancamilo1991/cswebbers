import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Evaluation } from '../models/Evaluation.model';
import { Question } from '../models/Question.model';

import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SimpleEvalService {


  constructor(private http: HttpClient) { }

  getFirstQuestion():Observable<any>{
    return this.http.get(`http://localhost:8080/verySimpleQuestions/firstquestion`);
  }

  getNextQuestion(evaluation:Evaluation):Observable<any>{
    return this.http.post(`http://localhost:8080/verySimpleQuestions/nextQuestion`, evaluation);
  }

  getResult(evaluation:Evaluation[]):Observable<any>{
    return this.http.post(`http://localhost:8080/verySimpleQuestions/result`, evaluation, httpOptions);
  }

}
