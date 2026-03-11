import { Injectable, signal } from '@angular/core';
import { EmployeeI } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employeesSignal = signal<EmployeeI[]>([
    {
      _id: '69a335b1b786dd68e3f8a376',
      name: 'Bartlett Bray',
      department: 'IT',
      level: 'M',
    },
    {
      _id: '69a335b1706bf8b64856454f',
      name: 'Brigitte Robbins',
      department: 'Marketing',
      level: 'S',
    },
    {
      _id: '69a335b1d353f286f2df9a5e',
      name: 'Amparo Watts',
      department: 'IT',
      level: 'M',
    },
    {
      _id: '69a335b176db368eae1d629a',
      name: 'Karen Wong',
      department: 'Finance',
      level: 'S',
    },
    {
      _id: '69a335b14e6bacc62aea005e',
      name: 'Gracie Robertson',
      department: 'HR',
      level: 'S',
    },
    {
      _id: '69a335b18f3aaf1620d5c77e',
      name: 'Natalie Haley',
      department: 'HR',
      level: 'M',
    },
    {
      _id: '69a335b1a0b7fb7807eaa8e0',
      name: 'Thelma George',
      department: 'Marketing',
      level: 'S',
    },
  ]);

  employees = this.employeesSignal.asReadonly();

  getEmployee(id: string) {
    return this.employeesSignal().find((emp) => emp._id === id) || null;
  }

  deleteEmployee(id: string) {
    this.employeesSignal.update((employees) => employees.filter((emp) => emp._id !== id));
  }

  addEmployee(employee: EmployeeI) {
    const _id = crypto.randomUUID();
    this.employeesSignal.update((employees) => [...employees, { ...employee, _id }]);
  }

  editEmployee(employee: EmployeeI) {
    const { _id } = employee;
    this.employeesSignal.update((employees) => {
      const index = employees.findIndex((e) => e._id === _id);
      if (index !== -1) {
        const newEmployees = [...employees];
        newEmployees[index] = employee;
        return newEmployees;
      }
      return employees;
    });
  }
}
