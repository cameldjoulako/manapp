import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EmployeeI } from '../../models/employee.model';

const API_BASE_URL = 'http://localhost:3000/employees';

@Injectable({
  providedIn: 'root',
})
export class EmployeeApi {
  private http = inject(HttpClient);

  getEmployees() {
    return this.http.get<EmployeeI[]>(API_BASE_URL);
  }

  getEmployee(id: string) {
    return this.http.get<EmployeeI>(`${API_BASE_URL}/${id}`);
  }

  deleteEmployee(id: string) {
    return this.http.delete(`${API_BASE_URL}/${id}`);
  }

  addEmployee(employee: EmployeeI) {
    return this.http.post<EmployeeI>(API_BASE_URL, employee);
  }

  editEmployee(employee: EmployeeI) {
    return this.http.put<EmployeeI>(`${API_BASE_URL}/${employee._id}`, employee);
  }
}
