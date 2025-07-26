import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
  imports: [NgIf],
})
export class ProjectsComponent {
  lang: 'fr' | 'en' = 'fr';

  switchLang() {
    this.lang = this.lang === 'fr' ? 'en' : 'fr';
  }
}
