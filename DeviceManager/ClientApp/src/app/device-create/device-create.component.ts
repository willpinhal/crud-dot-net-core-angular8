import { Component, OnInit } from '@angular/core';
import { Device } from '../device/Device';
import { DeviceService } from '../device/device.service';
import { CategoryService } from '../category/category.service'; 
import {Router} from "@angular/router"

@Component({
  selector: 'app-device-create',
  templateUrl: './device-create.component.html',
  styleUrls: ['./device-create.component.css']
})
export class DeviceCreateComponent implements OnInit {

  public categories: Category[];

  selectedOption: string;

  device: Device = {
    id: 0,
    categoryId: 0,
    color: '',
    partNumber: 0
  }
 
  constructor(private router: Router, private deviceService: DeviceService, private categoryService:CategoryService) { }

  ngOnInit() {
    this.loadAllCategory();
  }

  Save() : void{
    
    this.device.categoryId = Number(this.selectedOption);
    this.device.partNumber = Number(this.device.partNumber);

    this.deviceService.createDevice(this.device).subscribe(() => {
       alert("Device created successfully.");
       this.router.navigate(['/device'])
    });
  }

  loadAllCategory() {  
    this.categoryService.getAllCategory().subscribe(res => this.categories = res);  
  }    

}
