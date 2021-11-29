import { Component, OnInit } from '@angular/core';
import { Category } from '../category/Category';
import { CategoryService } from '../category/category.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  category: Category = {
    id: 0,
    name: ''
  }

  constructor(private router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
  }

  Save() : void{
    this.categoryService.createCategory(this.category).subscribe(() => {
      alert("Category created successfully.");
      this.router.navigate(['/category'])
    });
  }
}
