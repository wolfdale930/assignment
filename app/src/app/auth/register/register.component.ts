import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  usernameEmail: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async register() {
    const response: any = await this.authService.register({usernameEmail: this.usernameEmail, password: this.password});
      if (response) {
        this.authService.saveLoggedInUser({usernameEmail: response.usernameEmail, password: response.password});
        this.router.navigate(['/']);
      }
  }
}
