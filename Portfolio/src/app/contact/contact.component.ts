import { Component, OnInit } from '@angular/core';
import { ContactFormService } from '../services/contact-form.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { FileService } from '../services/file.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact = {
    fullName: "",
    email: "",
    message: ""
  };

  //contactForm: FormGroup
  constructor(private fileService: FileService){}

  ngOnInit(){
  
  }

  

  onSubmit(form: any): void{
    if(form.valid){
      this.sendEmail(this.contact)
    }

  }

  sendEmail(contact: any){
    const templateParams = {
      from_name: contact.fullName,
      from_email: contact.email,
      message: contact.message
    }
  }

  downloadFile(): void{
    this.fileService.downloadCv().subscribe(url =>{
      console.log("url:", url)
      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.download = 'Nahir_Vignolo_Software_Developer.pdf'
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      setTimeout(() => window.URL.revokeObjectURL(url), 100);
      }, error =>{
        console.error('Error downloading file', error)
      });
    
  }

}
