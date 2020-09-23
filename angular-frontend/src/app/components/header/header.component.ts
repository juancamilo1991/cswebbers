import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  
  ngOnInit() {
  }

  goToServices(){
    this.router.navigate(['/services'])
    .then(() => {
      console.log('it worked!');
    })
    .catch(() => {
      console.log('snap! did not work');
    });
  }

  checkAuthRoute(){
      this.router.navigate(['/myproject']);
  }

}
