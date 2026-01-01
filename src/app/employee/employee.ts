import { Component } from '@angular/core';

type Department = 'IT' | 'HR' | 'Finance' | 'Marketing';
type Level = 'J' | 'S' | 'M';

interface EmployeeI {
  _id: string;
  name: string;
  department: Department;
  level: Level;
}

@Component({
  selector: 'app-employee',
  imports: [],
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
