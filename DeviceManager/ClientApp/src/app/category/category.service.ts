import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Category } from './Category'; 

var httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};

  @Injectable({
    providedIn: 'root'
  })
  export class CategoryService {
    
    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { 
        
    }

    getAllCategory(): Observable<Category[]> {  
        return this.http.get<Category[]>(this.baseUrl + 'Category');  
    } 

    deleteCategoryById(id: number): Observable<number> {  
        const apiurl = `${this.baseUrl}Category/?id=${id}`;
        return this.http.delete<any>(apiurl);  
    } 

    createCategory(category: Category) : Observable<Category> {
        return this.http.post<Category>(this.baseUrl + 'Category', category);
    }
  }