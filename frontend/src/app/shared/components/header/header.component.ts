import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
  tokenExisted = false;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.tokenExisted = localStorage.getItem('myToken') !== null;
  }

  toHome() {
    localStorage.removeItem('loadAll');
    this.router.navigate([ '' ]);
  }

  toBlog() {
    this.router.navigate([ 'article' ]);
  }

  toAbout() {
    this.router.navigate([ 'about' ]);
    localStorage.setItem('loadAll', 'test');
  }

  toLogin() {
    this.router.navigate([ 'login' ]);
  }

  toRegister() {
    this.router.navigate([ 'register' ]);
  }

  logout() {
    localStorage.removeItem('myToken');
    this.router.navigate([ 'login' ]);
  }

  toProfile() {
    this.router.navigate([ 'author' ]);
  }
}
