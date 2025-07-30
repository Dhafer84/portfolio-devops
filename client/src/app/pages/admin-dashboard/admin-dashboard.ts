import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import { ApiService } from '../../services/api.service'; // ✅ nouveau service

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './admin-dashboard.html',
  styleUrls: ['./admin-dashboard.css']
})
export class AdminDashboardComponent implements OnInit {
  messages: any[] = [];
  loading = false;
  stats = {
    total: 0,
    messagesByDay: [] as { _id: string, count: number }[]
  };

  chartData = {
    labels: [] as string[],
    datasets: [
      {
        label: 'Messages par jour',
        data: [] as number[],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }
    ]
  };

  chartOptions: ChartOptions<'bar'> = {
    responsive: true,
    scales: {
      x: {},
      y: { beginAtZero: true }
    }
  };

  constructor(private apiService: ApiService) {} // ✅ injection du service

  ngOnInit() {
    if (localStorage.getItem('isAdmin') !== 'true') {
      window.location.href = '/admin-login';
      return;
    }

    this.getMessages();
    this.getStats();
  }

  logout() {
    localStorage.removeItem('isAdmin');
    window.location.href = '/admin-login';
  }

  getMessages() {
    this.loading = true;
    this.apiService.getMessages().subscribe({
      next: data => {
        this.messages = data;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  deleteMessage(id: string) {
    if (confirm('Confirmer la suppression ?')) {
      this.apiService.deleteMessage(id).subscribe(() => {
        this.messages = this.messages.filter(m => m._id !== id);
      });
    }
  }

  getStats() {
    this.apiService.getStats().subscribe({
      next: data => {
        this.stats = data;

        this.chartData.labels = data.messagesByDay.map((d: any) => d._id);
        this.chartData.datasets[0].data = data.messagesByDay.map((d: any) => +d.count);
      },
      error: err => {
        console.error('Erreur stats:', err);
      }
    });
  }

  exportCSV() {
    const rows = this.messages.map(m => ({
      Nom: m.name,
      Email: m.email,
      Message: m.message,
      Date: new Date(m.createdAt).toLocaleString()
    }));
    const csvContent = 'data:text/csv;charset=utf-8,' +
      [Object.keys(rows[0]).join(','), ...rows.map(row => Object.values(row).join(','))].join('\n');

    const link = document.createElement('a');
    link.href = encodeURI(csvContent);
    link.download = 'messages.csv';
    link.click();
  }
}
