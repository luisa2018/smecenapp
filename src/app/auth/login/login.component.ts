import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    // Lógica de autenticación para el login
    console.log('Login:', this.email, this.password);
  }

  goToRegister() {
    this.router.navigate(['/auth/register']);
  }
}
