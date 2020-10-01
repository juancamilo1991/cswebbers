import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Evaluation } from '../models/Evaluation.model';
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

uri = 'https://shrouded-meadow-54739.herokuapp.com';

  constructor(private http: HttpClient) { }

  getFirstQuestion():Observable<any>{
    return this.http.get(`${this.uri}/verySimpleQuestions/firstquestion`);
  }

  getNextQuestion(evaluation:Evaluation):Observable<any>{
    return this.http.post(`${this.uri}/verySimpleQuestions/nextQuestion`, evaluation);
  }

  getResult(evaluation:Evaluation[]):Observable<any>{
    return this.http.post(`${this.uri}/verySimpleQuestions/result`, evaluation, httpOptions);
  }

}
