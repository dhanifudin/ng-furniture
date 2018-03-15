import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/service/category.service';
import { Category } from '../shared/model/category.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  categoryList: Category [] = [];

  constructor(private categorySrv: CategoryService) { }

  ngOnInit() {
    this.categorySrv.loadCategories()
      .subscribe((result) => {
        console.log('finish loading');
        this.categoryList = result;
      });
  }

}
