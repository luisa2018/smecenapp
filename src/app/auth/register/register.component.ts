import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  onRegister() {
    // Lógica de autenticación para el registro
    if (this.password === this.confirmPassword) {
      console.log('Register:', this.email, this.password);
    } else {
      console.error('Passwords do not match');
    }
  }

  cancel() {
    this.router.navigate(['/auth/login']);
  }
}
