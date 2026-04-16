import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  Validators,
  ɵInternalFormsSharedModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication-service';
import { email } from '@angular/forms/signals';
import { LoginData } from '../../../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  private authService = inject(AuthenticationService);
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);

  message: null | string = null;

  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit() {
    const { email, password } = this.loginForm.value;
    const data = { email, password };

    //console.log(data);

    this.authService.login(data as LoginData).subscribe({
      next: ({ token }) => {
        this.authService.saveAuthToken(token);
        this.router.navigate(['/employees']);
      },
      error: ({ error }) => {
        console.error(error);
        this.message = error.message || 'An error occurred during login. Please try again.';
      },
    });
  }
}
