import { Routes, RouterOutlet } from '@angular/router';
import { EmployeeListPage } from './employee/components/pages/employee-list-page/employee-list-page';
import { EmployeeEditPage } from './employee/components/pages/employee-edit-page/employee-edit-page';
import { AddEmployeePage } from './employee/components/pages/add-employee-page/add-employee-page';
import { RegisterPage } from './authentification/components/smart/register-page/register-page';
import { LoginPage } from './authentification/components/smart/login-page/login-page';
import { authGuard } from './authentification/guard/auth-guard';
import { nonAuthGuard } from './authentification/guard/non-auth-guard';

export const routes: Routes = [
  {
    path: 'register',
    component: RegisterPage,
    canMatch: [nonAuthGuard],
  },
  {
    path: 'login',
    component: LoginPage,
    canMatch: [nonAuthGuard],
  },
  {
    path: 'employees',
    canMatch: [authGuard],
    children: [
      {
        path: '',
        component: EmployeeListPage,
      },
      {
        path: 'new',
        component: AddEmployeePage,
      },
      {
        path: 'edit/:empId',
        component: EmployeeEditPage,
      },
    ],
  },

  { path: '', redirectTo: 'employees', pathMatch: 'full' },
];
