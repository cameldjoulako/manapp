import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { Test } from './test/test';
import { Employee } from './employee/employee';
@Component({
  selector: 'app-root',
  imports: [Employee],
  //template:
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  appTitle = 'ManApp';
  appVersion: number = 1.0;

  features: number = 5;
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
  }

  date: Date = new Date();
  amount: number = 12.89;
  currency = 'USD';
}
