import { EmployeeApi } from './../../../services/employee-api/employee-api';
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
  //employeeService = inject(EmployeeService);

  EmployeeApiService = inject(EmployeeApi);

  onAddEmployee(employee: EmployeeI) {
    this.EmployeeApiService.addEmployee(employee).subscribe({
      next: () => {
        console.log('Employé ajouté avec succès');
        this.router.navigate(['/employees']);
      },
      error: (err) => console.error('Erreur API', err),
    });
  }
}
