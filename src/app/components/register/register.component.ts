import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Modal/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  class: string = "success";
  isHidden: boolean = true;
  message: string = "";

  registerForm: FormGroup

  constructor(
    private us: UserService,
    private fb: FormBuilder,
    private router: Router,


  ) {

    let formControls = {
      firstname: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(4)
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(4)
      ]),

      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")

      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      repassword: new FormControl('', [
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
    let data = this.registerForm.value;

    let user = new User(data.firstname, data.lastname, data.email, data.password);

    this.us.addUser(user).subscribe(res => {

      this.message = res['status'];
      this.class = "success";

      if (this.message === "bad") {
        this.message = res['errors'].form.errors.children.email.errors;
        this.class = "danger";
      }else{
        this.message ="You have been successfully registered."
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      }

      this.isHidden = false;



    },
      err => {

        console.log(err);

      }
    );



  }

}
