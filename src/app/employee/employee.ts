import { Component } from '@angular/core';
import { EmployeeI } from '../models/employee.model';
import { LevelPipe } from '../pipes/level-pipe';

@Component({
  selector: 'app-employee',
  imports: [LevelPipe],
  templateUrl: './employee.html',
  styleUrl: './employee.scss',
})
export class Employee {
  employee: EmployeeI = {
    _id: '69857452185789635874',
    name: 'John Doe',
    department: 'IT',
    level: 'J',
  };
}
