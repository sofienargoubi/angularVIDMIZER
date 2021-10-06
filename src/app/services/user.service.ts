import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../Modal/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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

  addUser(user : User) {
    return this.http.post(this.contactURL+"new_user", user, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  login(email : string , pwd : string) {
    return this.http.post(this.contactURL+"login", {"email" : email , "pwd" : pwd}, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  isLoggedIn(){

    let user = localStorage.getItem("Connected");
    console.log(user);

    if(user==="true"){
      return true;
    }else{
      return false;
    }
  }

}
