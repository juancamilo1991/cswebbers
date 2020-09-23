import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  errorMessage: String;
  flag: Boolean = false;
  loginFlag: Boolean = false;
  showMessage = 'flex';
  hideMessage = 'none';


  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router,
              private authService: AuthService) { }

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
    .subscribe(response => {
      console.log(response.statusCode)
      if(response.statusCode == 200){ 
        this.authService.setUserInfo(response.userName);
        this.router.navigate(['/myproject']);
          }
      else{
            if(this.loginFlag){this.router.navigate(['/register'])
              .then(() => {this.loginFlag = false; return})}
            else{
              this.router.navigate(['/login'])
                .then(() => {
                  this.flag = true;
                  if(response ==  "No user with that email"){
                   this.errorMessage = "No user with that email"; return;
                  }
                  else {
                   this.errorMessage = "Password incorrect"; return;
                }
                })
              }
            }
          },
            error => { console.error('noopie') })
      }
        

  setToFalse(){
    this.loginFlag = true;
  }

}
