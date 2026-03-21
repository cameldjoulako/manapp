import { Component, input, output } from '@angular/core';
import { EmployeeI } from '../../../models/employee.model';

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.scss',
})
export class EmployeeList {
  employees = input.required<EmployeeI[]>();

  edit = output<string>();
  delete = output<string>();
  details = output<string>();

  onDetails(employeeId: string) {
    this.details.emit(employeeId);
  }

  onDelete(employeeId: string) {
    this.delete.emit(employeeId);
  }

  onEdit(employeeId: string) {
    this.edit.emit(employeeId);
  }
}
