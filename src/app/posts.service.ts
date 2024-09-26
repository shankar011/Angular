import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http"
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';  

  constructor(private http:HttpClient) { }

  getPosts(): Observable<any>{
    return this.http.get<any>(this.apiUrl).pipe(
      catchError(this.handleError)
    )
  }


  private handleError(error:HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error("An error occured", error.error.message)
    }else{
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something went wrong. Please try again later')

  }

}
