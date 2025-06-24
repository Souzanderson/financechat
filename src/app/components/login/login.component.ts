import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginrepositoryService } from '../../repostiories/loginrepository.service';
import { Router } from '@angular/router';
import { storeUserToken } from '../../infra/dbuser';

@Component({
  selector: 'login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private repo: LoginrepositoryService, private router: Router) {}

  public password: string = '';
  public username: string = '';
  public loading: boolean = false;

  // Add any methods or properties needed for the login functionality here
  login() {
    // Logic for handling login
    this.loading = true;
    console.log('Logging in with', this.username, this.password);
    this.repo
      .login({ username: this.username, password: this.password })
      .then((response) => {
        console.log('Login successful', response);
        this.loading = false;
        storeUserToken(response.hashkey);
        this.router.navigate(['/chat']);
      })
      .catch((error) => {
        console.error('Login failed', error);
        this.loading = false;
        alert('Login failed. Please check your credentials.');
      });
  }
}
