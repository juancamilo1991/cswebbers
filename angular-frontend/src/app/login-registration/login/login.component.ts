import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;


  constructor(private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      userName: ['', [
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

get userName(){
  return this.myForm.get('userName');
}

get email() {
  return this.myForm.get('email');
}

get password(){
  return this.myForm.get('password');
}

 onSubmit() {
  this.userService.submitForm(this.myForm.value)
    .subscribe(user => console.log(`our user is ${user}`),
               error => console.log(`noooooooo`))
  }

}
