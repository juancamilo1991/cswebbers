import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ButtonStateService {


  constructor() { }

  private dataSource = new BehaviorSubject<Boolean>(false);
  newData = this.dataSource.asObservable();


  updateValue(toggle:Boolean){
    this.dataSource.next(toggle);
  }

}
