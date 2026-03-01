import { Component, inject } from '@angular/core';
import { Employee } from '../../ui/employee/employee';
import { EmployeeList } from '../../ui/employee-list/employee-list';
import { EmployeeI } from '../../../models/employee.model';
import { EmployeeService } from '../../../services/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list-page',
  imports: [Employee, EmployeeList],
  templateUrl: './employee-list-page.html',
  styleUrl: './employee-list-page.scss',
})
export class EmployeeListPage {
  employees: EmployeeI[] = [];

  currentEmployee: null | EmployeeI = null;

  private employeeService = inject(EmployeeService);

  private router = inject(Router);
  employee: any;

  constructor() {
    this.employees = this.employeeService.getEmployees();
  }

  showDetails(employeeId: string) {
    this.currentEmployee = this.employeeService.getEmployee(employeeId);
  }

  onDelete(employeeId: string) {
    console.log(employeeId);
    this.currentEmployee = null;

    this.employeeService.deleteEmployee(employeeId);

    this.employees = this.employeeService.getEmployees();
  }

  onEdit(employeeId: string) {
    //rdirect to /employes/edit/:id
    this.router.navigate(['employees/edit', employeeId]);
  }
}
