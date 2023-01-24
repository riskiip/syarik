import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isRegisForm = false;
  loginForm = new FormGroup({
    emailLogin: new FormControl(''),
    passwordLogin: new FormControl('')
  });

  regisForm = new FormGroup({
    emailRegis: new FormControl(''),
    passwordRegis: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  changeRegistration() {
    this.isRegisForm = !this.isRegisForm;
  }

}
