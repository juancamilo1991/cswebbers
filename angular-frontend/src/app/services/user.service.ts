import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'https://shrouded-meadow-54739.herokuapp.com';


  constructor(private http: HttpClient) { }

submitForm(user):Observable<any>{
  return this.http.post(`${this.uri}/user/register`, user, httpOptions);
}

loginUser(loginUser):Observable<any>{
  return this.http.post(`${this.uri}/user/login`, loginUser);
}

checkAuth():Observable<any>{
  return this.http.get(`${this.uri}/user/myproject`);
}


}
