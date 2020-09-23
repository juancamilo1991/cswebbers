import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthenticated() : Boolean {
    let userData = sessionStorage.getItem('userInfo')
    console.log(userData)
    if(userData && JSON.parse(userData)){
      return true;
    }
    return false;
  }

  public setUserInfo(user){
    sessionStorage.setItem('userInfo', JSON.stringify(user));
  }

}
