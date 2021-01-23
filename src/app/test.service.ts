import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  configUrl = 'https://soundarya-3641d-default-rtdb.firebaseio.com/contacts.json';

  constructor(private http: HttpClient) { }

  getContactsFromFirebase() {
    return this.http.get(this.configUrl);
  }

}
