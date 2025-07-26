import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-redirect',
  standalone: true,
  template: '',
})
export class AdminRedirectComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    if (isAdmin) {
      this.router.navigate(['/admin-dashboard']);
    } else {
      this.router.navigate(['/admin-login']);
    }
  }
}
