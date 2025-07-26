import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-certifications',
  standalone: true,
  templateUrl: './certifications.html',
  styleUrls: ['./certifications.css'],
  imports: [NgFor]
})
export class CertificationsComponent {
  lang: 'fr' | 'en' = 'fr';

  certifications = [
    {
      image: '/assets/aws-builder.png',
      title: 'AWS Cloud Security Builder',
      issuer: 'AWS Academy',
      date: '24 mai 2025'
    },
    {
      image: '/assets/aws-foundations.png',
      title: 'AWS Cloud Security Foundations',
      issuer: 'AWS Academy',
      date: '14 mai 2025'
    },
    {
      image: '/assets/aws-storage.png',
      title: 'AWS Getting Started with Storage',
      issuer: 'AWS Educate',
      date: '20 juillet 2025'
    },
    {
      image: '/assets/aws-cloud101.png',
      title: 'AWS Cloud Computing 101',
      issuer: 'AWS Educate',
      date: '18 juillet 2025'
    },
    {
      image: '/assets/aws-ml.png',
      title: 'AWS Machine Learning Foundations',
      issuer: 'AWS Educate',
      date: '21 juillet 2025'
    },
    {
      image: '/assets/isc2.png',
      title: 'ISC2 Candidate',
      issuer: 'ISC2',
      date: '31 juillet 2026'
    },
    {
      image: '/assets/nvidia.png',
      title: 'NVIDIA AI Anomaly Detection',
      issuer: 'NVIDIA',
      date: 'avril 2025'
    }
  ];

  switchLang() {
    this.lang = this.lang === 'fr' ? 'en' : 'fr';
  }
}
