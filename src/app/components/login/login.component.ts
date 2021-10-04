import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup

  constructor(
    private formBuilder :FormBuilder
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
  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }
  login(){
    
  }
}
