import { Component, inject, OnDestroy, signal } from '@angular/core';
import { Employee } from '../../ui/employee/employee';
import { EmployeeList } from '../../ui/employee-list/employee-list';
import { EmployeeI } from '../../../models/employee.model';
import { EmployeeService } from '../../../services/employee';
import { Router, RouterLink } from '@angular/router';
import { EmployeeApi } from '../../../services/employee-api/employee-api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-list-page',
  imports: [Employee, EmployeeList, RouterLink],
  templateUrl: './employee-list-page.html',
  styleUrl: './employee-list-page.scss',
})
export class EmployeeListPage implements OnDestroy {
  //private employeeService = inject(EmployeeService);
  employees = signal<EmployeeI[]>([]);
  employeeApi = inject(EmployeeApi);

  private router = inject(Router);

  // employees = this.employeeService.employees;
  currentEmployee: null | EmployeeI = null;

  private sub!: Subscription;

  constructor() {
    this.sub = this.employeeApi.getEmployees().subscribe({
      next: (employee) => {
        this.employees.set(employee);
      },
      error: (err) => console.error('Erreur API', err),
    });
  }

  showDetails(employeeId: string) {
    //this.currentEmployee = this.employeeService.getEmployee(employeeId);
  }

  onDelete(employeeId: string) {
    this.currentEmployee = null;

    //this.employeeService.deleteEmployee(employeeId);
  }

  onEdit(employeeId: string) {
    //redirect to /employes/edit/:id
    this.router.navigate(['employees/edit', employeeId]);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
