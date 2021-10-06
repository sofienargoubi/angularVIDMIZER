import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup
  class: string = "success";
  isHidden: boolean = true;
  message: string = "";

  constructor(
    private us : UserService,
    private formBuilder :FormBuilder,
    private router: Router,
  ) {
    let formControls = {
      email: new FormControl('',[
        Validators.required,
        Validators.email,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")

      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(8)
      ])
    }
    this.loginForm = this.formBuilder.group(formControls);
   }

  ngOnInit(): void {
  }
  
  get email(){return this.loginForm.get('email'); }
  get password(){return this.loginForm.get('password');}

  login(){
    let data = this.loginForm.value;

        this.us.login(data.email,data.password).subscribe(res => {

         // console.log(res);

     this.message = res['status'];
     this.class = "danger";

      if (this.message === "ok") {
        localStorage.setItem("Connected",JSON.stringify(true));
        this.router.navigate(['/']);

      }

      this.isHidden = false;





    },
      err => {

       // console.log(err);

      }
    );
  }
}
