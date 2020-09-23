import { Injectable } from '@angular/core';
import { ButtonStateService } from './button-state.service';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class EverGuardService implements CanActivate {

toggle: Boolean = false;

  constructor(private router: Router, private btnService: ButtonStateService) { }

    
  canActivate(){
    this.btnService.newData.subscribe(toggle => this.toggle = toggle);
    console.log(this.toggle);
          if(this.toggle){return true}
          else{this.router.navigate(['/front']); return false;}
      }
}
