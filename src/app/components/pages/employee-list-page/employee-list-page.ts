import { Component, inject } from '@angular/core';
import { Employee } from '../../ui/employee/employee';
import { EmployeeList } from '../../ui/employee-list/employee-list';
import { EmployeeI } from '../../../models/employee.model';
import { EmployeeService } from '../../../services/employee';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-list-page',
  imports: [Employee, EmployeeList, RouterLink],
  templateUrl: './employee-list-page.html',
  styleUrl: './employee-list-page.scss',
})
export class EmployeeListPage {
  private employeeService = inject(EmployeeService);
  private router = inject(Router);

  employees = this.employeeService.employees;
  currentEmployee: null | EmployeeI = null;
  employee: any;

  constructor() {}

  showDetails(employeeId: string) {
    this.currentEmployee = this.employeeService.getEmployee(employeeId);
  }

  onDelete(employeeId: string) {
    this.currentEmployee = null;

    this.employeeService.deleteEmployee(employeeId);
  }

  onEdit(employeeId: string) {
    //rdirect to /employes/edit/:id
    this.router.navigate(['employees/edit', employeeId]);
  }
}
