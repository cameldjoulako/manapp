import { Routes, RouterOutlet } from '@angular/router';
import { EmployeeListPage } from './employee/components/pages/employee-list-page/employee-list-page';
import { EmployeeEditPage } from './employee/components/pages/employee-edit-page/employee-edit-page';
import { AddEmployeePage } from './employee/components/pages/add-employee-page/add-employee-page';

export const routes: Routes = [
  {
    path: 'employees',
    component: EmployeeListPage,
  },
  {
    path: 'employees/new',
    component: AddEmployeePage,
  },
  {
    path: 'employees/edit/:empId',
    component: EmployeeEditPage,
  },
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
];
