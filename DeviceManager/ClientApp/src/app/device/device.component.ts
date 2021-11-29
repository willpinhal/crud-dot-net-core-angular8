import { Component, Inject, OnInit } from '@angular/core';
import { DeviceService } from './device.service'; 
import { Device } from './Device';
import {Router} from "@angular/router"

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  public devices: Device[];

  constructor(private router: Router, private deviceService:DeviceService) {
  
  }      

  ngOnInit() {
    this.loadAllDevice();
  }

  loadAllDevice() {  
    this.deviceService.getAllDevice().subscribe(res => this.devices = res);  
  } 

  AddNew() : void {
    alert("Novo Item");
  }

  Remove(id:number) : void {
        
    if (confirm("Do you really want to remove this device?")){
      this.deviceService.deleteDeviceById(id).subscribe(result => {                
        alert(`Device has been removed.`);
        this.loadAllDevice();
      });
    } 

  }

}
