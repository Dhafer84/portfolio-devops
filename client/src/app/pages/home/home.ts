/*import { Component, OnInit } from '@angular/core';
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
}*/
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common'; // nécessaire pour *ngIf / {{}}
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {
  message = '';
  likeCount = 0;

  constructor(private api: ApiService, private http: HttpClient) {}

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

    // 🔄 Charger le compteur de likes
    this.http.get<{ count: number }>('https://portfolio-backend-y0at.onrender.com/api/like')
      .subscribe({
        next: (res) => this.likeCount = res.count,
        error: (err) => console.error('Erreur like:', err)
      });
  }

  like(): void {
    this.http.post<{ count: number }>('https://portfolio-backend-y0at.onrender.com/api/like', {})
      .subscribe({
        next: (res) => this.likeCount = res.count,
        error: (err) => console.error('Erreur ajout like:', err)
      });
  }
}
