import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form.value);
    //console.log(this.form.controls['userName'].value);
    console.log(this.form.get('userName').value);
    sessionStorage.setItem('loggedUser', this.form.get('userName').value);
    this.router.navigateByUrl('user-home');

  }
}
