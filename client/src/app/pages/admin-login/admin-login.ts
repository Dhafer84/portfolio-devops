import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.html',
  styleUrls: ['./admin-login.css'],
  imports: [CommonModule,ReactiveFormsModule],
})
export class AdminLoginComponent {
  loginForm: FormGroup;
  loading = false;
  error: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    this.loading = true;
    const credentials = this.loginForm.value;

    this.http.post<{ token: string }>('https://portfolio-backend-y0at.onrender.com/api/auth/login', credentials)
      .subscribe({
        next: (res) => {
          localStorage.setItem('token', res.token);
         this.router.navigateByUrl('/admin-dashboard');
        },
        error: () => {
          this.error = 'Identifiants invalides';
          this.loading = false;
        }
      });
  }
}
