import { Component, OnInit } from '@angular/core';
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


  contacts: Contact[] = [];
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
        Validators.minLength(8),
        Validators.maxLength(13)
      ]),
      region: new FormControl('', [
        Validators.required,
        Validators.minLength(4)

      ])
    }

    this.contactForm = this.fb.group(formControls)

  }

  get nom() { return this.contactForm.get('nom'); }
  get prenom() { return this.contactForm.get('prenom'); }
  get telephone() { return this.contactForm.get('telephone'); }
  get region() { return this.contactForm.get('region'); }




  ngOnInit(): void {
  }

  addContact() {

    let data = this.contactForm.value;

    let contact = new Contact(data.nom, data.prenom, data.telephone, data.region);

    this.cs.addContact(contact).subscribe(res => {
      console.log(res);
      this.cs.getContacts().subscribe((data: Contact[]) => {

        this.contacts = data;
      });

    },
      err => {
        console.log(err);

      }
    );
  }

  getRegion(){
    this.cs.getRegion().subscribe(

      (data: object[]) => {
        console.log(data);


          this.regions = data;


      },
        err => {
          console.log(err);

        }
   
    );
  }

}
