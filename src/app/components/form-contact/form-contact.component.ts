import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { from } from 'rxjs';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/Modal/Contact';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit {

  @Output() contacts = new EventEmitter<Contact>();

  regions: object[] = [];
  contactForm: FormGroup;
  constructor(

    private cs: ContactService,
    private fb: FormBuilder,

  ) {

    let formControls = {
      nom: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(4)
      ]),
      prenom: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(4)
      ]),
      telephone: new FormControl('', [
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(10),

      ]),
      region: new FormControl('', [
        Validators.required,

      ])
    }

    this.contactForm = this.fb.group(formControls)

  }

  get nom() { return this.contactForm.get('nom'); }
  get prenom() { return this.contactForm.get('prenom'); }
  get telephone() { return this.contactForm.get('telephone'); }
  get region() { return this.contactForm.get('region'); }




  ngOnInit(): void {
    this.getRegion();
  }


  addContact() {
    let data = this.contactForm.value;
    this.contacts.emit(data);
  }

  getRegion() {
    this.cs.getRegion().subscribe(
      (data: object[]) => {
        this.regions = data;
      },
      err => {
        console.log(err);
      }

    );
  }

}
