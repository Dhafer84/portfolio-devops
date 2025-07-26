import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-login.html',
  styleUrls: ['./admin-login.css'],
})
export class AdminLoginComponent {
  loginForm: FormGroup;
  error = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
  const { username, password } = this.loginForm.value;

  if (username === 'admin' && password === 'admin123') {
    localStorage.setItem('isAdmin', 'true');
    this.router.navigate(['/admin-dashboard']).then(() => {
      window.location.reload(); // recharge la navbar avec isAdmin à jour
    });
  } else {
    this.error = 'Identifiants invalides';
  }
}


}
