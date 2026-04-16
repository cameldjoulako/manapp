import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication-service';

export const nonAuthGuard: CanMatchFn = (route, segments) => {
  const authService = inject(AuthenticationService);

  const isConnected = authService.isConnected();

  const router = inject(Router);

  if (!isConnected) {
    return true;
  }

  router.navigate(['/']);
  return false;
};
