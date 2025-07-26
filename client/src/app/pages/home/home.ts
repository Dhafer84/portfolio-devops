import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule  } from '@angular/common'; // <-- à ajouter si tu as *ngIf ou interpolation

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // ⬅️ nécessaire pour {{}} ou *ngIf
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
//export class HomeComponent {}
export class HomeComponent implements OnInit {
  message = '';

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    console.log('HomeComponent loaded');
    this.api.getHello().subscribe({
      next: (response) => {
        console.log('Réponse API:', response);
        this.message = response.message;
      },
      error: (err) => {
        console.error('Erreur API:', err);
        this.message = 'Erreur API : ' + (err.message || err.statusText);
      },
    });
  }
}
