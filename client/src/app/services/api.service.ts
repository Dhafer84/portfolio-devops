import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = environment.apiUrl;  // <-- dynamique

  constructor(private http: HttpClient) {}

  getHello(): Observable<any> {
    return this.http.get(`${this.baseUrl}/hello`);
  }

  sendContact(data: { name: string; email: string; message: string }) {
    return this.http.post(`${this.baseUrl}/contact`, data);
  }
  getMessages(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/contact`);
  }

  deleteMessage(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/contact/${id}`);
  }

  getStats(): Observable<any> {
    return this.http.get(`${this.baseUrl}/stats/messages`);
  }
}
