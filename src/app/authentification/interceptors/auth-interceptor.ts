import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthenticationService } from '../services/authentication-service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  //console.log('Intercepted request:', req);
  const authSer = inject(AuthenticationService);

  const token = authSer.getAuthToken();

  if (!token) {
    return next(req);
  }

  const finalRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  return next(finalRequest);
};
