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
}
