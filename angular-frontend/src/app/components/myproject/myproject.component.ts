import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-myproject',
  templateUrl: './myproject.component.html',
  styleUrls: ['./myproject.component.css']
})
export class MyprojectComponent implements OnInit {

  name: String;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {

    let userName = sessionStorage.getItem('userInfo')
    this.name = JSON.parse(userName);

  }
  
  logUserOut(){
   sessionStorage.removeItem('userInfo');
   this.router.navigate(['/front'])
   .then(response => {
     
   });
  }

}
