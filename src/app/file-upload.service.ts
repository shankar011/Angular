

import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  private apiUrl = 'http://localhost:3000/upload'; 

  constructor(private http: HttpClient) {}

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file); 

    return this.http.post(this.apiUrl, formData, {
      reportProgress: true, 
      observe: 'events', 
      headers: new HttpHeaders({
       
        'enctype': 'multipart/form-data'
      }),
    });
  }
}
