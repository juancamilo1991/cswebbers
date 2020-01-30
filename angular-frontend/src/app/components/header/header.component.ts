import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

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

}
