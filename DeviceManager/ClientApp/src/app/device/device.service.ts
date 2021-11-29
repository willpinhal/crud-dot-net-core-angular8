import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Device } from './Device'; 

var httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};

  @Injectable({
    providedIn: 'root'
  })
  export class DeviceService {
    
    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { 
        
    }

    getAllDevice(): Observable<Device[]> {  
        return this.http.get<Device[]>(this.baseUrl + 'Device');  
    } 

    deleteDeviceById(id: number): Observable<number> {  
        const apiurl = `${this.baseUrl}Device/?id=${id}`;
        return this.http.delete<any>(apiurl);  
    } 

    createDevice(device: Device) : Observable<Device> {
        return this.http.post<Device>(this.baseUrl + 'Device', device);
    }
  }