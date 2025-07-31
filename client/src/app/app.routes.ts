import { Routes } from '@angular/router';


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



  {
    path: '**',
    redirectTo: ''
  }
];
