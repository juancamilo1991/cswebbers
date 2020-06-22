import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  myForm: FormGroup;


  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      firstName: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],
      lastName: ['', [
        Validators.required,
        Validators.minLength(5)  
      ]],
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

get firstName(){
  return this.myForm.get('firstName');
}

get lastName() {
  return this.myForm.get('lastName');
}

get email() {
  return this.myForm.get('email');
}

get password(){
  return this.myForm.get('password');
}

onSubmit() {
this.userService.submitForm(this.myForm.value)
    .subscribe(user => this.router.navigate(['/login']),
               
               error => console.log(error));
  }

}
