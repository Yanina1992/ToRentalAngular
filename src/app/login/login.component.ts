import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username: string = ''; // Initialize as empty string
  password: string = ''; // Initialize as empty string

  constructor(private authService: AuthService) {}

  login(): void {
    // Since username and password are initialized, they're guaranteed to be strings here
    this.authService.login(this.username, this.password).subscribe(() => {
      console.log('Login successful');
    }, error => {
      console.error('Login error', error);
    });
  }
}
