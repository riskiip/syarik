import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from './login.service';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  destroySubject$ = new Subject();

  loginForm = new FormGroup({
    emailLogin: new FormControl(''),
    passwordLogin: new FormControl('')
  });

  constructor(private router: Router,
              private loginService: LoginService) { }

  ngOnInit(): void {
  }

  changeRegistration() {
    this.router.navigate(['register'])
  }

  login() {
    let loginAuthor = {
      email: this.loginForm.get('emailLogin')?.value,
      password: this.loginForm.get('passwordLogin')?.value
    }

    this.loginService.login(loginAuthor)
      .pipe(takeUntil(this.destroySubject$))
      .subscribe((val) => {
        if (val) {
          let token: any = val;
          localStorage.setItem('myToken', JSON.stringify(token.myToken));
          localStorage.setItem('authId', JSON.stringify(token.authorId));
          this.router.navigate(['homepage']);
        }
      })
  }
}
