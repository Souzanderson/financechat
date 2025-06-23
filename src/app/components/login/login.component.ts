import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor() {}

  public password: string = '';
  public username: string = '';
  public loading: boolean = false;

  // Add any methods or properties needed for the login functionality here
  login() {
    // Logic for handling login
    this.loading = true;
    console.log('Logging in with', this.username, this.password);
  }
}
