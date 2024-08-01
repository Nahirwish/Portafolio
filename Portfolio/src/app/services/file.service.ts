import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private filePath = 'documents/Nahir Vignolo Software Developer.pdf';

  constructor(private storage: AngularFireStorage) { }

  downloadCv(): Observable<string>{
    const fileRef = this.storage.ref(this.filePath);
    return fileRef.getDownloadURL();
  }
}
