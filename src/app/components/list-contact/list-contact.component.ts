import { Component, OnInit ,OnChanges} from '@angular/core';
import { Contact } from 'src/app/Modal/Contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {

  contacts: Contact[] = [];
  constructor(private  cs: ContactService) { }

  ngOnInit(): void {

    this.getContacts();
  }


  getContacts(){
    this.cs.getContacts().subscribe((data: Contact[]) => {
      this.contacts = data;
    });
  }
  deleteContact( contact : Contact){
    this.cs.deleteContact(contact.id).subscribe( (res)=>{
      this.getContacts();
    });


  }

}
