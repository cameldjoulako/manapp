import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { Test } from './test/test';
import { Employee } from './components/ui/employee/employee';
import { EmployeeI } from './models/employee.model';
import { EmployeeList } from './components/ui/employee-list/employee-list';
import { EmployeeService } from './services/employee';
/* import { DatePipe, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { LevelPipe } from './pipes/level-pipe'; */
@Component({
  selector: 'app-root',
  imports: [/* LevelPipe */ /* DatePipe, CurrencyPipe, UpperCasePipe */ RouterOutlet],
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
}
