import { EmployeeService } from './../../../services/employee';
import { Component, inject } from '@angular/core';
import { EmployeeForm } from '../../ui/employee-form/employee-form';
import { EmployeeI } from '../../../models/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee-page',
  imports: [EmployeeForm],
  templateUrl: './add-employee-page.html',
  styleUrl: './add-employee-page.scss',
})
export class AddEmployeePage {
  router = inject(Router);
  employeeService = inject(EmployeeService);

  onAddEmployee(employee: EmployeeI) {
    this.employeeService.addEmployee(employee);
    this.router.navigate(['/employees']);
  }
}
