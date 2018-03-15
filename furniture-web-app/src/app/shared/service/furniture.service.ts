import { Injectable } from '@angular/core';
import { Furniture } from '../model/furniture.model';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class FurnitureService {
  private furnitureList: Furniture[] = [];
  constructor(private http: Http) {}
  loadFurniture(cat_id: string) {
    return this.http.get('/api/category/' + cat_id + '/furniture')
    .map((respone: Response) => {
      const data = respone.json();
      this.furnitureList = data;
      return data;
    },
      (error) => console.log(error)
    );
  }

  getAllFurniture() {
    return this.furnitureList.slice();
  }

  getFurniture(it_id) {
    const result = this.furnitureList.find((elem) => {
      return (elem.it_id === it_id);
    });
    return result;
  }
}
