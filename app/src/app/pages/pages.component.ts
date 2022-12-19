import { Component } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {

  constructor(public authService: AuthService) {}

}
