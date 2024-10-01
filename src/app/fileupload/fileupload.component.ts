
import { Component } from '@angular/core';
import { FileUploadService } from '../file-upload.service'; 
import { HttpEventType } from '@angular/common/http'; 

@Component({
  selector: 'app-fileupload', 
  templateUrl: './fileupload.component.html', 
  styleUrls: ['./fileupload.component.css'], 
})
export class FileuploadComponent {
  uploadProgress: number = -1; 
  uploadSuccess: boolean = false; 

  constructor(private fileUploadService: FileUploadService) {} 

  onFileSelected(event: any) {
    const file = event.target.files[0]; 
    this.uploadFile(file); 
  }

  
  uploadFile(file: File) {
    this.fileUploadService.uploadFile(file).subscribe(
      (event) => {
        if (event.type === HttpEventType.UploadProgress) {
        
          this.uploadProgress = event.total
            ? Math.round((100 * event.loaded) / event.total) 
            : 0; 
        } else if (event.type === HttpEventType.Response) {
          
          console.log('File uploaded successfully!', event.body); 
          this.uploadSuccess = true; 
          this.uploadProgress = -1; 
        }
      },
      (error) => {
       
        console.error('File upload failed', error); 
        this.uploadProgress = -1; 
      }
    );
  }

  
  onDragOver(event: DragEvent) {
    event.preventDefault(); 
  }
  
  
  onDrop(event: DragEvent) {
    event.preventDefault(); 
    const file = event.dataTransfer?.files[0]; 
    if (file) {
      this.uploadFile(file); 
    }
  }
}
