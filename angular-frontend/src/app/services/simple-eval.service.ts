import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StickyDirection } from '@angular/cdk/table';

import { Evaluation } from '../evaluation.model';
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

  uri = 'http://localhost:4000/verySimpleQuestions';

  constructor(private http: HttpClient) { }

  getFirstQuestion():Observable<any>{
    return this.http.get(`${this.uri}/firstquestion`);
  }

  getNextQuestion(evaluation:Evaluation):Observable<any>{
    return this.http.post(`${this.uri}/nextQuestion`, evaluation);
  }

  getResult(evaluation:Evaluation[]):Observable<any>{
    return this.http.post(`${this.uri}/result`, evaluation, httpOptions);
  }

}
