import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/Modal/Contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contacts: Contact[] = [];
  serach: string;
  class: string = "success";
  isHidden: boolean = true;
  message: string = "";
  constructor(private cs: ContactService) { }

  ngOnInit(): void {
    this.getContacts();
  }
  getContacts() {
    this.cs.getContacts().subscribe((data: Contact[]) => {
      this.contacts = data;
    });
  }
  submitted(event) {

    let contact = new Contact(event.nom, event.prenom, event.telephone, event.region);

    this.cs.addContact(contact).subscribe(res => {

      this.message = res['status'];

      if (this.message === "bad") {
        this.message = res['errors'].form.errors.children.nom.errors || res['errors'].form.errors.children.prenom.errors || res['errors'].form.errors.children.telephone.errors;
        this.class = "danger";
      }

      this.isHidden = false;
      setTimeout(() => {
        this.isHidden = true;
      }, 3000);

      this.ngOnInit();

    },
      err => {
        console.log(err);

      }
    );

  }

  DeletedItem(contact: Contact) {
    this.cs.deleteContact(contact.id).subscribe((res) => {
      this.ngOnInit();
    });
  }
}
