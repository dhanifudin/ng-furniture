import { Injectable } from '@angular/core';
import { Furniture } from '../model/furniture.model';
import { Http, Response } from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class FurnitureService {

  constructor(private http: Http) {}

  getFurnituresByCategory(catId: string) {
    return this.http
      .get(`/api/category/${catId}/furniture`)
      .map((respone: Response) => {
        const data = respone.json();
        for (const elem of data) {
          elem.images = elem.images.split(',');
        }
        return data;
      },
        (error) => console.log(error)
      );
  }

  getFurnitureDetails(catId: string, itId: string) {
    return this.http
      .get(`/api/category/${catId}/furniture/${itId}`)
      .map((response: Response) => {
        const data = response.json();
        data.images = data.images.split(',');
        return data;
      },
        (error) => console.log(error)
      );
  }
}
