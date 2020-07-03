import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formSignup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
      address: new FormGroup({
        address1: new FormControl('', Validators.required),
        address2: new FormControl('', Validators.required),
        state: new FormControl('', Validators.required),
        pincode: new FormControl('', Validators.required)
      })
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSignup() {
    console.log(this.formSignup.value);
    this.router.navigateByUrl('home');
    console.log(this.formSignup.get(['address','address1']).value);
  }

  onCancel() {
    this.router.navigateByUrl('home');
  }

  updatePartially() {
    this.formSignup.patchValue({
      firstName : 'Arjoo',
      address : {
        address1 : 'SS Sapphire Appartment'
      }
    });
  }
}
