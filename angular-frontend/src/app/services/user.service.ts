import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

uri = 'http://localhost:4000/user';

  constructor(private http: HttpClient) { }

submitForm(user):Observable<any>{
  return this.http.post(`${this.uri}/register`, user, httpOptions);
}

}
