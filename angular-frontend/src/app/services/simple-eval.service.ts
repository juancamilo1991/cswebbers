import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SimpleEvalService {

  uri = 'http://localhost:4000/verySimpleQuestions';

  constructor(private http: HttpClient) { }

  getFirstQ(){
    return this.http.get(`${this.uri}/firstq`);
  }
   
  getSecondQ(){
    return this.http.get(`${this.uri}/secondq`);
  }

  getThirdQ(){
    return this.http.get(`${this.uri}/thirdq`);
  }

}
