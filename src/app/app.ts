import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { Test } from './test/test';
import { Employee } from './employee/employee';
import { EmployeeI } from './models/employee.model';
import { EmployeeList } from './employee-list/employee-list';
/* import { DatePipe, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { LevelPipe } from './pipes/level-pipe'; */
@Component({
  selector: 'app-root',
  imports: [Employee, EmployeeList /* LevelPipe */ /* DatePipe, CurrencyPipe, UpperCasePipe */],
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

  employees: EmployeeI[] = [
    {
      _id: '69a335b1b786dd68e3f8a376',
      name: 'Bartlett Bray',
      department: 'IT',
      level: 'M',
    },
    {
      _id: '69a335b1706bf8b64856454f',
      name: 'Brigitte Robbins',
      department: 'Marketing',
      level: 'S',
    },
    {
      _id: '69a335b1d353f286f2df9a5e',
      name: 'Amparo Watts',
      department: 'IT',
      level: 'M',
    },
    {
      _id: '69a335b176db368eae1d629a',
      name: 'Karen Wong',
      department: 'Finance',
      level: 'S',
    },
    {
      _id: '69a335b14e6bacc62aea005e',
      name: 'Gracie Robertson',
      department: 'HR',
      level: 'S',
    },
    {
      _id: '69a335b18f3aaf1620d5c77e',
      name: 'Natalie Haley',
      department: 'HR',
      level: 'M',
    },
    {
      _id: '69a335b1a0b7fb7807eaa8e0',
      name: 'Thelma George',
      department: 'Marketing',
      level: 'S',
    },
    {
      _id: '69a335b103db0df7e5dc341e',
      name: 'Ingrid Caldwell',
      department: 'IT',
      level: 'J',
    },
    {
      _id: '69a335b1c86a15bcff273ca1',
      name: 'Skinner Whitehead',
      department: 'Marketing',
      level: 'J',
    },
    {
      _id: '69a335b1f3e287ce32256561',
      name: 'Herminia Delacruz',
      department: 'HR',
      level: 'S',
    },
  ];

  currentEmployee: null | EmployeeI = null;

  showDetails(employeeId: string) {
    //console.log(employeeId);
    this.currentEmployee = this.employees.find((emp) => emp._id === employeeId) || null;
  }

  onDelete(employeeId: string) {
    //console.log(employeeId);
    this.currentEmployee = null;
    this.employees = this.employees.filter((emp) => emp._id !== employeeId);
  }

  onEdit(employeeId: string) {
    console.log(employeeId);
  }
}
