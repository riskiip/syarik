import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
  isActive1 = false;
  isActive2 = false;
  isActive3 = false;
  burgerMenuClicked = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onClickNav(state: string) {
    switch (state) {
      case 'daily' :
        console.log('ini daily blog');
        this.isActive1 = true;
        this.isActive2 = false;
        this.isActive3 = false;
        break;
      case 'design':
        console.log('ini design blog');
        this.isActive1 = false;
        this.isActive2 = true;
        this.isActive3 = false;
        break;
      case 'tutorials':
        console.log('ini tutorials blog');
        this.isActive1 = false;
        this.isActive2 = false;
        this.isActive3 = true;
        break;
    }
  }

  openMobileMenu() {
    this.burgerMenuClicked = !this.burgerMenuClicked;
  }

  // toHome() {
  //   localStorage.removeItem('loadAll');
  //   this.router.navigate([ '' ]);
  // }
  //
  // toBlog() {
  //   this.router.navigate([ 'article' ]);
  // }
  //
  // toAbout() {
  //   this.router.navigate([ 'about' ]);
  //   localStorage.setItem('loadAll', 'test');
  // }
  //
  // toLogin() {
  //   this.router.navigate([ 'login' ]);
  // }
  //
  // toRegister() {
  //   this.router.navigate([ 'register' ]);
  // }
  //
  // logout() {
  //   localStorage.removeItem('myToken');
  //   this.router.navigate([ 'login' ]);
  // }
  //
  // toProfile() {
  //   this.router.navigate([ 'author' ]);
  // }
}
