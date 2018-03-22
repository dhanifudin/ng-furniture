import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactUsService } from '../shared/service/contact-us.service';

import 'rxjs/Rx';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  providers: [ContactUsService]
})
export class ContactUsComponent implements OnInit {

  emailBlackList = ['test@test.com', 'temp@temp.com'];

  contactForm: FormGroup;
  submitted = false;

  constructor(private contactUsService: ContactUsService) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, this.blankSpaces]),
      'email': new FormControl(null, [Validators.required, Validators.email, this.inEmailBlackList.bind(this)]),
      'gender': new FormControl(null, [Validators.required]),
      'message': new FormControl(null, [Validators.required])
    });
  }

  blankSpaces(control: FormControl): {[s: string]: boolean} {
    if (control.value != null && control.value.trim().length === 0) {
      return {'blankSpaces': true};
    }
    return null;
  }

  inEmailBlackList(control: FormControl): {[s: string]: boolean} {
    if (this.emailBlackList.indexOf(control.value) !== -1) {
      return {'emailBlackListed': true};
    }
    return null;
  }

  onSubmit() {
    const feedback = this.contactForm.value;
    this.contactUsService.addFeedback(feedback)
      .subscribe(response => {
        if (response.status === 200) {
          this.submitted = true;
        }
      });
  }

  resetForm() {
    this.contactForm.reset({

    });
    this.submitted = false;
  }
}
