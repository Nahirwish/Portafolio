import { Component, OnInit } from '@angular/core';
import { ContactFormService } from '../services/contact-form.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  //contactForm: FormGroup
  constructor(private contactService: ContactFormService){}

  ngOnInit(){
  
  }

  

  onSubmit(form: any): void{
    console.log(form.value);
    alert("se envio el formulario")

  }

  downloadCv(){
    this.contactService.downloadCv().subscribe();
    
  }

}
