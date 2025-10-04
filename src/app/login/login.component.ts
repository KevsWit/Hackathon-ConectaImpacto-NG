import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  onSubmit() {
    if (this.email && this.password) {
      console.log('Login attempt:', {
        email: this.email,
        password: this.password,
        rememberMe: this.rememberMe
      });
      
      // Here you would typically call a service to authenticate the user
      // For now, we'll just show an alert
      alert('¡Inicio de sesión exitoso! (Esta es una demostración)');
    } else {
      alert('Por favor, completa todos los campos');
    }
  }
}