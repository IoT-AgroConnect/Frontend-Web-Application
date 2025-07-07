import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AcceptableRange {
  cageId: number;
  minTemperature: number;
  maxTemperature: number;
  minHumidity: number;
  maxHumidity: number;
  minCO2: number;
  maxCO2: number;
  minWaterQuantity: number;
  maxWaterQuantity: number;
  applyToAll: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AcceptableRangeApiService {
  private baseUrl = 'http://localhost:8080/api/v1/acceptable-ranges';

  constructor(private http: HttpClient) {}

  getByCageId(cageId: number): Observable<AcceptableRange> {
    return this.http.get<AcceptableRange>(`${this.baseUrl}/by-cage/${cageId}`);
  }
}
