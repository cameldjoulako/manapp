import { Component, inject, input, OnChanges, output, SimpleChanges } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ɵInternalFormsSharedModule,
  ReactiveFormsModule,
  FormBuilder,
} from '@angular/forms';
import { EmployeeI } from '../../../models/employee.model';

@Component({
  selector: 'app-employee-form',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.scss',
})
export class EmployeeForm implements OnChanges {
  //tres verbeu ici
  /* form = new FormGroup({
    _id: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    department: new FormControl('', Validators.required),
    level: new FormControl('', Validators.required),
  }); */

  //avec le formBuilder pour reduire la verbosité
  private formBuilder = inject(FormBuilder);

  employee = input<EmployeeI>();

  form = this.formBuilder.group({
    _id: [''],
    name: ['', [Validators.required, Validators.maxLength(30)]],
    department: ['', [Validators.required]],
    level: ['', Validators.required],
  });

  //output pour sauvegarder le form
  addEmployee = output<EmployeeI>();

  editEmployee = output<EmployeeI>();

  isEdit = false;

  ngOnChanges(changes: SimpleChanges): void {
    if ('employee' in changes && this.employee()) {
      this.isEdit = true;

      const { _id, name, department, level } = this.employee()!;
      const data = { _id, name, department, level };

      //remplissage du form avec les données de l'employé selectionné
      this.form.setValue(data);

      //pour eviter les message d'eereur et qu'il met juste les infos voulu: pathValue
      //this.form.patchValue(data);
    }
  }

  //submit form
  onSubmit() {
    const { name, department, level } = this.form.value;

    if (this.isEdit && this.employee()) {
      const _id = this.employee()!._id;
      const employee = { _id, name, department, level };
      this.editEmployee.emit(employee as EmployeeI);
    } else {
      const _id = this.form.value._id || '';
      const employee = { _id, name, department, level };
      this.addEmployee.emit(employee as EmployeeI);
    }
  }
}
