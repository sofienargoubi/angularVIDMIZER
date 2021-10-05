import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/Modal/Contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contacts : Contact[] = [];
  serach: string;
  isHidden : boolean = true;
  message : string ="";
  constructor(  private cs: ContactService) { }

  ngOnInit(): void {
    this.getContacts();
  }
  getContacts() {
    this.cs.getContacts().subscribe((data: Contact[]) => {
      this.contacts = data;
    });
  }
  submitted(event){

   console.log(event);

   let contact = new Contact(event.nom, event.prenom, event.telephone, event.region);

    this.cs.addContact(contact).subscribe(res => {
      console.log(res);
      this.isHidden =false;
      this.message = res['status'];
      setTimeout(() => {
        this.isHidden =true;
      }, 2000);
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
