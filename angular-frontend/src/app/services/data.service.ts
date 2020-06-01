import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

private resultSubject = new BehaviorSubject<Number>(50);
currentResult = this.resultSubject.asObservable();

  constructor(){}

changeResult(evaluation: Number){
  this.resultSubject.next(evaluation);
}

}
