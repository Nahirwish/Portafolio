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

  downloadFile(): void {
    this.fileService.downloadCv().subscribe(url => {
      console.log('Download URL:', url);
      fetch(url)
        .then(response => response.blob())
        .then(blob => {
          const link = document.createElement('a');
          const objectURL = URL.createObjectURL(blob);
          link.href = objectURL;
          link.target = '_blank';
          link.setAttribute('download', 'Nahir_Vignolo_Software_Developer_CV.pdf');
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          setTimeout(() => URL.revokeObjectURL(objectURL), 100);
        })
        .catch(error => console.error('Error fetching the file', error));
    }, error => {
      console.error('Error downloading file', error);
    });
  }
  
    
  

}
