import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
        Validators.required
      ]],
      lastName: ['', [
        Validators.required 
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
    .subscribe(user => {
                console.log(user);
                console.log(user)
                if(user == 'registration succesfull'){
                this.router.navigate(['/login'])
                }
                else {
                  console.log('something went wrong');
                }
              }, 
               error => console.log(error));
  }

}
