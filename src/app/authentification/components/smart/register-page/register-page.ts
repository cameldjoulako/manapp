import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  Validators,
  ɵInternalFormsSharedModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication-service';
import { User } from '../../../model/user';

@Component({
  selector: 'app-register-page',
  imports: [ReactiveFormsModule],
  templateUrl: './register-page.html',
  styleUrl: './register-page.scss',
})
export class RegisterPage {
  registerFormBuilder = inject(FormBuilder);

  authService = inject(AuthenticationService);

  message: null | string = null;

  registerForm = this.registerFormBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required /* Validators.pattern('') */]],
    firstName: ['', [Validators.required, Validators.maxLength(30)]],
    lastName: ['', [Validators.required, Validators.maxLength(30)]],
  });

  onSubmit() {
    console.log(this.registerForm.value);
    const { email, password, firstName, lastName } = this.registerForm.value;

    const user = { email, password, firstName, lastName };

    this.authService.register(user as User).subscribe({
      next: (registeredUser) => {
        const { firstName, lastName } = registeredUser;
        this.registerForm.reset();
        this.message = `${firstName} ${lastName} registered !`;
      },
      error: (err) => {
        this.message = 'An error happened';
        console.error(this.message);
      },
    });
  }
}
