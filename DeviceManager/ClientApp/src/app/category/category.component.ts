import { Component, Inject, OnInit } from '@angular/core';
import { CategoryService } from './category.service'; 
import { Category } from './Category';
import {Router} from "@angular/router"

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public categories: Category[];

  constructor(private router: Router, private categoryService:CategoryService) {
  
  }      

  ngOnInit() {
    this.loadAllCategory();
  }

  loadAllCategory() {  
    this.categoryService.getAllCategory().subscribe(res => this.categories = res);  
  } 

  AddNew() : void {
    alert("Novo Item");
  }

  Remove(id:number) : void {
        
    if (confirm("Do you really want to remove this category?")){
      this.categoryService.deleteCategoryById(id).subscribe(result => {                
        alert(`Category has been removed.`);
        this.router.navigate(['/category'])
      });
    }

  }

}
