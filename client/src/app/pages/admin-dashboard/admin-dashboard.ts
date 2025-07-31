/*import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.html',
  styleUrls: ['./admin-dashboard.css']
})
export class AdminDashboardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/admin']);
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/admin']);
  }
}*/
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Chart from 'chart.js/auto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.html',
  styleUrls: ['./admin-dashboard.css']
})
export class AdminDashboardComponent implements OnInit {
  totalMessages = 0;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/admin']);
    }

    this.fetchStats();
  }

  fetchStats() {
    this.http.get<{ total: number, messagesByDay: { _id: string, count: number }[] }>('https://portfolio-backend-y0at.onrender.com/api/stats/messages')
      .subscribe({
        next: (data) => {
          this.totalMessages = data.total;
          this.renderChart(data.messagesByDay);
        },
        error: (err) => {
          console.error('Erreur stats :', err);
        }
      });
  }

  renderChart(messagesByDay: { _id: string, count: number }[]) {
    const labels = messagesByDay.map(item => item._id);
    const counts = messagesByDay.map(item => item.count);

    new Chart('messagesChart', {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: 'Messages par jour',
          data: counts,
          borderColor: '#00d4ff',
          backgroundColor: 'rgba(0, 212, 255, 0.2)',
          tension: 0.3,
          fill: true
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { labels: { color: 'white' } }
        },
        scales: {
          x: { ticks: { color: 'white' } },
          y: { ticks: { color: 'white' } }
        }
      }
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/admin']);
  }
}

