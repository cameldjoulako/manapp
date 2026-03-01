import { Routes, RouterOutlet } from '@angular/router';
import { EmployeeListPage } from './components/pages/employee-list-page/employee-list-page';
import { EmployeeEditPage } from './components/pages/employee-edit-page/employee-edit-page';

export const routes: Routes = [
  {
    path: 'employees',
    component: EmployeeListPage,
  },
  {
    path: 'employees/edit/:empId',
    component: EmployeeEditPage,
  },
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
];
