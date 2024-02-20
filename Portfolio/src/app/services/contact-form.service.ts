import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {
  private url = "http://localhost:8080/ContactForm"

  constructor(private httpClient: HttpClient) { }

  downloadCv(): Observable<any>{
    return this.httpClient.get(this.url)
    

  } 
}
