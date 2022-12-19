import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usernameEmail: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async login() {
    if (this.usernameEmail && this.password) {
      const response: any = await this.authService.login({usernameEmail: this.usernameEmail, password: this.password});
      if (response) {
        this.authService.saveLoggedInUser({usernameEmail: response.usernameEmail, password: response.password});
        this.router.navigate(['/']);
      }
    }
  }

}
