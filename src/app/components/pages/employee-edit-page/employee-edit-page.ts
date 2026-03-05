import { Component, computed, inject, input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { EmployeeService } from '../../../services/employee';
import { Employee } from '../../ui/employee/employee';
import { EmployeeI } from '../../../models/employee.model';

@Component({
  selector: 'app-employee-edit-page',
  imports: [Employee],
  templateUrl: './employee-edit-page.html',
  styleUrl: './employee-edit-page.scss',
})
export class EmployeeEditPage {
  route = inject(ActivatedRoute);
  employeeService = inject(EmployeeService);

  //employee: EmployeeI | null = null; //marche pour les 2 premiere methode

  //3e methode: signal et computed et
  empId = input.required<string>();

  employee = computed(() => {
    const id = this.empId();
    return this.employeeService.getEmployee(id);
  });

  constructor() {
    //onservable: Recuperation de facon non réactive
    /* this.route.params
      .pipe(
      .pipe(
        map((params) => {
          const employeeId = params['empId'];
          return this.employeeService.getEmployee(employeeId);
        }),
        takeUntilDestroyed(),
      )
      .subscribe({
        next: (employee) => {
          //console.log(employee);
          this.employee = employee;
        },
        error: (err) => {
          this.employee = null;
        },
      }); */
    //snapshot: recuperation de facons non reactive: on ne gere pas la desinscription de fluix
    /* const employeeId = this.route.snapshot.params['empId'];
    this.employee = this.employeeService.getEmployee(employeeId); */
    //3e methode:
  }
}
