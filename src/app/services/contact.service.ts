import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

import { Observable, throwError  } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { Contact } from '../Modal/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactURL = 'http://127.0.0.1:8000/';


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened , please try again later.');
  }

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }
  getContacts() {
    return this.http.get(this.contactURL+"contacts", this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  addContact(contact : Contact) {
    return this.http.post(this.contactURL+"new_contact", contact, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  
  deleteContact( contact : Contact | number) {
    const id = typeof contact === 'number' ? contact : contact.id;
    return this.http.delete(this.contactURL+"delete_contact/"+id, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));;
    }

}
