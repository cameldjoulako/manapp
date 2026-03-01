import { Injectable } from '@angular/core';
import { EmployeeI } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees: EmployeeI[] = [
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
    {
      _id: '69a335b103db0df7e5dc341e',
      name: 'Ingrid Caldwell',
      department: 'IT',
      level: 'J',
    },
    {
      _id: '69a335b1c86a15bcff273ca1',
      name: 'Skinner Whitehead',
      department: 'Marketing',
      level: 'J',
    },
    {
      _id: '69a335b1f3e287ce32256561',
      name: 'Herminia Delacruz',
      department: 'HR',
      level: 'S',
    },
  ];

  getEmployee(id: string) {
    return this.employees.find((emp) => emp._id === id) || null;
  }

  getEmployees() {
    return this.employees;
  }

  deleteEmployee(id: string) {
    this.employees = this.employees.filter((emp) => emp._id !== id);
  }
}
