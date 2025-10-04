import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EnvironmentService } from '../../environments/environment.service';

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

  constructor(private environmentService: EnvironmentService) {}

  onSubmit() {
    if (this.email && this.password) {
      console.log('Login attempt:', {
        email: this.email,
        password: this.password,
        rememberMe: this.rememberMe,
        apiUrl: this.environmentService.apiUrl
      });
      
      // Here you would typically call a service to authenticate the user
      // Example: this.authService.login(this.email, this.password, this.environmentService.apiUrl)
      alert(`¡Inicio de sesión exitoso! (API: ${this.environmentService.apiUrl})`);
    } else {
      alert('Por favor, completa todos los campos');
    }
  }
}