import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Feedback } from '../model/feedback.model';

import 'rxjs/Rx';

@Injectable()

export class ContactUsService {

  constructor(private http: Http) { }

  addFeedback(feedback) {
    console.log(feedback);
    return this.http
      .post('/api/feedback', feedback)
      .map(response => {
        console.log(response);
        // return new Feedback(response.json());
        return response.json();
      });
  }

}
