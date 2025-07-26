import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ essentiel pour *ngIf

@Component({
  selector: 'app-about',
  standalone: true, // ✅ important
  imports: [CommonModule], // ✅ ajoute CommonModule ici
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent {
  lang: 'fr' | 'en' = 'fr';

  switchLang() {
    this.lang = this.lang === 'fr' ? 'en' : 'fr';
  }
}
