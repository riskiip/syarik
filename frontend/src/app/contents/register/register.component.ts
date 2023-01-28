import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {RegisterService} from './register.service';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.scss' ]
})
export class RegisterComponent implements OnInit {
  destroySubject$ = new Subject();
  successRegis = false;

  regisForm = new FormGroup({
    nameRegis: new FormControl(''),
    emailRegis: new FormControl(''),
    dobRegis: new FormControl(''),
    passwordRegis: new FormControl('')
  });

  constructor(private router: Router,
              private regisService: RegisterService) {
  }

  ngOnInit(): void {
  }

  changeRegistration() {
    this.router.navigate([ 'login' ]);
  }

  submitRegistration() {
    let author = {
      name: this.regisForm.get('nameRegis')?.value,
      email: this.regisForm.get('emailRegis')?.value,
      dob: this.regisForm.get('dobRegis')?.value,
      password: this.regisForm.get('passwordRegis')?.value
    };

    this.regisService.register(author)
      .pipe(takeUntil(this.destroySubject$))
      .subscribe((val) => {
        if (val) {
          this.successRegis = true;
          console.log(this.successRegis);
          this.router.navigate([ 'login' ]);
        }
      });
  }

}
