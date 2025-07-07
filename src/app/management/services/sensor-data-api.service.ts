import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface SensorData {
  id: number;
  temperature: number;
  humidity: number;
  co2: number;
  waterQuality: number;
  waterQuantity: number;
  cageId: number;
}

@Injectable({
  providedIn: 'root'
})
export class SensorDataApiService {
  private apiUrl: string = `${environment.baseURL}/iot/sensor-data`;

  constructor(private http: HttpClient) {}

  getByCageId(cageId: number): Observable<SensorData[]> {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<SensorData[]>(`${this.apiUrl}/by-cage/${cageId}`, { headers });
  }
}
