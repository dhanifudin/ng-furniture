import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Furniture } from '../../shared/model/furniture.model';
import { FurnitureService } from '../../shared/service/furniture.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit { categorySelected;

  itemSelected;
  item: Furniture = new Furniture();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private furnitureSvc: FurnitureService
  ) {}

  ngOnInit() {
    this.categorySelected = this.route.snapshot.params['cat_id'];
    this.itemSelected = this.route.snapshot.params['it_id'];
    this.furnitureSvc
      .getFurnitureDetails(this.categorySelected, this.itemSelected)
      .subscribe((result) => {
        if (result === undefined) {
          this.router.navigate(['/home']);
        } else {
          this.item = result;
        }
      });
  }

  backToCollection() {
    this.router.navigate(['/collection', this.categorySelected, 'furniture']);
  }
}
