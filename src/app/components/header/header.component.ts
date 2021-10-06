import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn : Boolean ;
  constructor(private us : UserService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn=this.us.isLoggedIn();
  }
  logout(){
    localStorage.removeItem("Connected");
    this.router.navigate(['/login']);
  }
}
