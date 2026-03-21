import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EmployeeI } from '../../models/employee.model';

const API_BASE_URL = 'http://localhost:3000/employees';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNhbWVsQGdtYWlsLmNvbSIsImZpcnN0TmFtZSI6IkFub255bW91cyIsImxhc3ROYW1lIjoiQS4iLCJfaWQiOiI2OWIyYmFkMDU4MzdkNDA0NjZjN2ViOTQiLCJpYXQiOjE3NzMzODI2NTQsImV4cCI6MTc3MzQ2OTA1NH0.NJmTXJSgHDT3ceRD-CGlYBi5R-2flbA9hikYjT-vfcI';
const headers = {
  Authorization: `Bearer ${token}`,
};
@Injectable({
  providedIn: 'root',
})
export class EmployeeApi {
  private http = inject(HttpClient);

  getEmployees() {
    return this.http.get<EmployeeI[]>(API_BASE_URL, { headers });
  }

  getEmployee(id: string) {
    return this.http.get<EmployeeI>(`${API_BASE_URL}/${id}`, { headers });
  }

  deleteEmployee(id: string) {
    return this.http.delete(`${API_BASE_URL}/${id}`, { headers });
  }

  addEmployee(employee: EmployeeI) {
    return this.http.post<EmployeeI>(API_BASE_URL, employee, { headers });
  }

  editEmployee(employee: EmployeeI) {
    return this.http.put<EmployeeI>(`${API_BASE_URL}/${employee._id}`, employee, { headers });
  }
}
