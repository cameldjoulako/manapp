import { Component, input, output } from '@angular/core';
import { EmployeeI } from '../models/employee.model';
import { LevelPipe } from '../pipes/level-pipe';

@Component({
  selector: 'app-employee',
  imports: [LevelPipe],
  templateUrl: './employee.html',
  styleUrl: './employee.scss',
})
export class Employee {
  employee = input.required<EmployeeI>();
  nameClick = output<string>();

  onNameClick() {
    this.nameClick.emit(this.employee()._id);
  }
}
