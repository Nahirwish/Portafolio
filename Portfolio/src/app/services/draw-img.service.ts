import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DrawImgService {

  constructor(private firestore: Firestore) { }


  getAllImages(): Observable <any>{
    return this.http.get(this.)
  } 


}
