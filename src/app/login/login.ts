import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { EmailValidPipe } from '../email-valid-pipe';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, EmailValidPipe],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginError = '';

  // Reactive form for the login page
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.loginError = 'Invalid username or password';
      return;
    }

    this.loginError = '';
    console.log('Login form submitted:', this.loginForm.value);
  }
}