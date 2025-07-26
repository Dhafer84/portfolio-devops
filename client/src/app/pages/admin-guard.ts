// src/app/admin.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class adminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    if (!isAdmin) {
      this.router.navigate(['/admin']); // redirige vers login
      return false;
    }
    return true;
  }
}
