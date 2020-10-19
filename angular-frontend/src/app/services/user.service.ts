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


  constructor(private http: HttpClient) { }

submitForm(user):Observable<any>{
  return this.http.post(`http://localhost:8080/user/register`, user, httpOptions);
}

loginUser(loginUser):Observable<any>{
  return this.http.post(`http://localhost:8080/user/login`, loginUser);
}

checkAuth():Observable<any>{
  return this.http.get(`http://localhost:8080/user/myproject`);
}


}
