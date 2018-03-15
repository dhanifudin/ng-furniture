import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CategoryService } from '../../shared/service/category.service';
import { FurnitureService } from '../../shared/service/furniture.service';
import { Furniture } from '../../shared/model/furniture.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  categorySelected = '0';
  furnitureList: Furniture[] = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categorySrv: CategoryService, private furnitureSrv: FurnitureService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.categorySelected = params['cat_id'];
        this.categorySrv.selectCategory(this.categorySelected);
        this.furnitureList = [];
        this.furnitureSrv.loadFurniture(this.categorySelected)
          .subscribe((result) => {
            this.furnitureList = result;
          });
      });
  }

  viewDetail(it_id) {
    this.router.navigate([it_id], {relativeTo: this.route});
  }
}
