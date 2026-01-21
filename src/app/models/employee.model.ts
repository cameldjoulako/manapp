import { Department } from './department.model';
import { Level } from './level.model';

export interface EmployeeI {
  _id: string;
  name: string;
  department: Department;
  level: Level;
}
