import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/Modal/Contact';


@Component({
  selector: '[app-list-contact]',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {

  @Input() contact;
  @Output() deleteItem = new EventEmitter<Contact>();


  constructor() { }

  ngOnInit(): void {
  }


  deleteContact(val) {
    this.deleteItem.emit(val);
  }



}
