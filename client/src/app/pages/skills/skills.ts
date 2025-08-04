import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
  styleUrls: ['./skills.css'],
  imports: [NgIf, NgFor]
})
export class SkillsComponent {
  lang: 'fr' | 'en' = 'fr';

  switchLang() {
    this.lang = this.lang === 'fr' ? 'en' : 'fr';
  }

  logos = [
    { src: '/assets/Docker.png', alt: 'Docker' },
    { src: '/assets/Kubernetes.png', alt: 'Kubernetes' },
    { src: '/assets/Jenkins.png', alt: 'Jenkins' },
    { src: '/assets/Azure.png', alt: 'Azure' },
    { src: '/assets/Azure_Devops.png', alt: 'Azure DevOps' },
    { src: '/assets/GitHub.png', alt: 'GitHub' },
    { src: '/assets/HashiCorp Terraform.png', alt: 'Terraform' },
    { src: '/assets/Ansible.png', alt: 'Ansible' },
    { src: '/assets/Grafana.png', alt: 'Grafana' },
    { src: '/assets/Prometheus.png', alt: 'Prometheus' }
  ];
  skillsFr = [
    {
      devops: 'Docker, Docker Compose',
      qa: 'MISRA, LDRA, Coverity',
      qualite: 'TRS, QRQC, 5S, 8D, 5M...'
    },
    {
      devops: 'Kubernetes (K3s, AKS)',
      qa: 'Revue de code, tests unitaires',
      qualite: 'ISO 9001, IATF 16949, ISO26262, ASPICE'
    },
    {
      devops: 'Jenkins, GitHub Actions, GitLab CI',
      qa: 'SonarQube, Git',
      qualite: 'Gestion Projets, SLA, SPC'
    },
    {
      devops: 'Terraform, Ansible',
      qa: 'Scripts Bash, YAML',
      qualite: 'Technique de fabrication PCBA: CMS, Brasage...'
    },
    {
      devops: 'Azure DevOps, Pipelines',
      qa: 'Python (automatisation test)',
      qualite: 'Formateur certifié CIT en IPC-A610'
    },
    {
      devops: 'AWS, Azure (bases)',
      qa: 'CI/CD systèmes embarqués',
      qualite: 'Encadrement, audits internes'
    }
  ];

  // === Compétences en EN ===
  skillsEn = [
    {
      devops: 'Docker, Docker Compose',
      qa: 'MISRA, LDRA, Coverity',
      qualite: 'TRS, QRQC, 5S, 8D, 5M...'
    },
    {
      devops: 'Kubernetes (K3s, AKS)',
      qa: 'Code review, unit testing',
      qualite: 'ISO 9001, IATF 16949, ISO26262, ASPICE'
    },
    {
      devops: 'Jenkins, GitHub Actions, GitLab CI',
      qa: 'SonarQube, Git',
      qualite: 'Project Management, SLA, SPC'
    },
    {
      devops: 'Terraform, Ansible',
      qa: 'Bash & YAML scripting',
      qualite: 'PCBA Manufacturing Techniques: SMT, Brazing...'
    },
    {
      devops: 'Azure DevOps, Pipelines',
      qa: 'Python (test automation)',
      qualite: 'CIT-certified trainer in IPC-A610'
    },
    {
      devops: 'AWS, Azure (basics)',
      qa: 'Embedded CI/CD pipelines',
      qualite: 'Coaching, internal audits'
    }
  ];
}
