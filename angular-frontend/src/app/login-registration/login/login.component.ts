import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;


  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email  
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)
      ]]
    })
  }

get email() {
  return this.myForm.get('email');
}

get password(){
  return this.myForm.get('password');
}

onLoginSubmit() {
  this.userService.loginUser(this.myForm.value)
    .subscribe(user => {
                this.router.navigate(['/front']);
    },
      error => console.error('noopie'));
  }

}
