import { Routes } from '@angular/router';
import { AdminRedirectComponent } from './pages/admin-redirect';
import { AdminGuard } from './pages/admin-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then(m => m.AboutComponent)
  },
  {
    path: 'skills',
    loadComponent: () => import('./pages/skills/skills').then(m => m.SkillsComponent)
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects').then(m => m.ProjectsComponent)
  },
  {
    path: 'certifications',
    loadComponent: () => import('./pages/certifications/certifications').then(m => m.CertificationsComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then(m => m.ContactComponent)
  },
{ path: 'admin', component: AdminRedirectComponent },
  {
    path: 'admin-login',
    loadComponent: () => import('./pages/admin-login/admin-login').then(m => m.AdminLoginComponent)
  },
  {
    path: 'admin-dashboard',
    canActivate: [AdminGuard],
    loadComponent: () => import('./pages/admin-dashboard/admin-dashboard').then(m => m.AdminDashboardComponent)
  },


  {
    path: '**',
    redirectTo: ''
  }
];
