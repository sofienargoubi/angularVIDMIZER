import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  constructor(

    private fb: FormBuilder,

    private router : Router,


  ) {

    let formControls = {
      firstname: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(4)
      ]),
      lastname: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(4)
      ]),
     
      email: new FormControl('',[
        Validators.required,
        Validators.email,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")

      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(8)
      ]),
      repassword: new FormControl('',[
        Validators.required,
      ])
    }

    this.registerForm = this.fb.group(formControls)

   }

   get firstname() { return this.registerForm.get('firstname') }
   get lastname() { return this.registerForm.get('lastname') }

   get email() { return this.registerForm.get('email') }
   get password() { return this.registerForm.get('password') }
   get repassword() { return this.registerForm.get('repassword') }
  ngOnInit(): void {
  }


  register() {




  }

}
