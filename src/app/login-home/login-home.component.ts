import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.css']
})
export class LoginHomeComponent implements OnInit {

  loggedInUserName = '';

  constructor() { }

  ngOnInit(): void {
    this.loggedInUserName = sessionStorage.getItem('loggedUser');
    // let map = new Map();
    // map.set("Arjoo",1);
    // map.set("Anshul",2);
    // map.set("Arjoo",3);
  }

}
