import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../../../authentification/services/authentication-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  authServ = inject(AuthenticationService);

  private router = inject(Router);

  isConnected = this.authServ.isConnected;

  onLogout() {
    this.authServ.logout();
    this.router.navigate(['/login']);
  }
}
