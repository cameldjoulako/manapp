import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { Test } from './test/test';
import { Employee } from './employee/components/ui/employee/employee';
import { EmployeeI } from './employee/models/employee.model';
import { EmployeeList } from './employee/components/ui/employee-list/employee-list';
import { EmployeeService } from './employee/services/employee';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgModel,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { JsonPipe, UpperCasePipe } from '@angular/common';
import { required } from '@angular/forms/signals';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Header } from './shared/components/smart/header/header';
/* import { DatePipe, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { LevelPipe } from './pipes/level-pipe'; */
@Component({
  selector: 'app-root',
  imports: [
    /* LevelPipe */ /* DatePipe, CurrencyPipe, UpperCasePipe */ RouterOutlet,
    /* FormsModule */
    /* JsonPipe */ ReactiveFormsModule,
    Header,
  ],
  //template:
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  appTitle = 'ManApp';
  appVersion: number = 1.0;

  //INPUT & OUTPUT

  /* employee: EmployeeI = {
    _id: '69857452185789635874',
    name: 'Camel Djoulako',
    department: 'IT',
    level: 'J',
  };
  $empl: any; */

  /* onNameClick(employeeId: string) {
    console.log(employeeId);
  } */

  //FIN INPUT & OUTPUT

  /* features: number = 5;
  protected readonly title = signal('manapp');

  myNeed: string = '';

  decrement() {
    this.features--;
  }
  increment() {
    this.features++;
  }

  onEdit(value: string) {
    this.myNeed = value;
  }

  msgAction: 'success' | 'error' = 'success';

  changeColor(style: 'success' | 'error') {
    this.msgAction = style;
  }

  upassword: string = '';

  onPasswordView(value: string) {
    this.upassword = value;
  }

  inputType: 'password' | 'text' = 'password';

  toggleInputType() {
    console.log('Toggling input type');
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
  } */

  /* now: Date = new Date();
  amount: number = 12.89;
  appcurrency = 'FCFA '; */

  /*
  .
  .
  .
  Template Driven Forms
  .
  .
  */

  /*   username: string = '';

  isAdult = false; */

  /* data = {
    username: '',
    isAdult: false,
  }; */

  /**
   * .
   * .
   * . Reactive Forms
   */

  //reactive form sans formgroup
  usernameCtrl = new FormControl('', [Validators.required, Validators.minLength(3)]);

  isAdultCtrl = new FormControl(false);

  constructor() {
    ///en Angular 18 events permet d'ecouter à la fois les évenements(changements) de valeur et de statut d'un FormControl
    this.usernameCtrl.events.pipe(takeUntilDestroyed()).subscribe((value) => {
      console.log('Username changed:', value);
    });
  }

  //regroupement dans un formgroup des reactive form
  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),

    isAdult: new FormControl(false),
  });
}
