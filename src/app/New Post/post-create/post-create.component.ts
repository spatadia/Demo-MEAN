import { Component } from '@angular/core';
import {FormControl, Validators, NgForm} from '@angular/forms';
import { InformationService } from '../information.service';

@Component(
  {
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']

  }
)
export class PostCreateComponent {
  enteredFirstName = '';
  enteredLastName = '';
  enteredAddress = '';
  enteredEmailAddress = '';
  enteredCity = '';
  enteredState = '';
  enteredZipCode = '';
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  // informationEntered = new EventEmitter<Information>();
constructor(public informationService: InformationService) {}
onAddPost(form: NgForm) {
  if (form.invalid) {
    return;
  }
  this.informationService.addPost(
    form.value.first,
    form.value.last,
    form.value.address,
    form.value.emailFormControl,
    form.value.city,
    form.value.state,
    form.value.zipc
    );
  form.resetForm();
}
}
/*
  onAddName(form: NgForm) {

    if (form.invalid) {
      return;
    }
    // const information: Information = {
    // first: form.value.first,
    //  last: form.value.last,
    //  email: form.value.email,
    //  state: form.value.state,
    //  zip: form.value.zip,
    //  address: form.value.address,
    //  city: form.value.city
  //  };
      this.informationService.addInformation(form.value.first,
        form.value.last,
        form.value.email,
        form.value.state,
        form.value.zip,
        form.value.address,
        form.value.city);
        form.resetForm();
  }
}
*/
