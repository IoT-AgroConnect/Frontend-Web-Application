import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { SensorDataApiService, SensorData } from '../../services/sensor-data-api.service';

@Component({
  selector: 'app-iot-monitoring',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule
  ],
  templateUrl: './iot-monitoring.component.html',
  styleUrls: ['./iot-monitoring.component.css']
})
export class IotMonitoringComponent {
  cageId!: number;
  latestSensorData?: SensorData;

  sensorCards = [
    { icon: 'water_drop', label: 'Agua', value: '', status: '', bg: '#e3f2fd' },
    { icon: 'device_thermostat', label: 'Temperatura', value: '', status: '', bg: '#fff8e1' },
    { icon: 'air', label: 'CO₂', value: '', status: '', bg: '#e8f5e9' },
    { icon: 'humidity_low', label: 'Humedad', value: '', status: '', bg: '#f3e5f5' },
    { icon: 'event', label: 'Limpieza', value: '5 días', status: 'Programada', bg: '#fbe9e7' },
    { icon: 'update', label: 'Última limpieza', value: '17/06/2025', status: 'Reciente', bg: '#ede7f6' }
  ];

  deviceStatus = [
    'Sensor Agua',
    'Sensor Temp.',
    'Sensor CO₂',
    'Dispensador',
    'Sist. Limpieza'
  ];

  constructor(
      private route: ActivatedRoute,
      private sensorService: SensorDataApiService
  ) {
    this.cageId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadSensorData();
  }

  loadSensorData() {
    this.sensorService.getByCageId(this.cageId).subscribe({
      next: (data) => {
        if (data.length > 0) {
          this.latestSensorData = data[data.length - 1];
          this.updateSensorCards();
        }
      },
      error: (err) => {
        console.error('Error al obtener datos de sensores:', err);
      }
    });
  }

  updateSensorCards() {
    if (!this.latestSensorData) return;
    const d = this.latestSensorData;

    this.sensorCards[0].value = `${d.waterQuantity}ml`;
    this.sensorCards[0].status = d.waterQuality >= 8 ? 'Buen estado' : 'Calidad baja';

    this.sensorCards[1].value = `${d.temperature}°C`;
    this.sensorCards[1].status = d.temperature >= 20 && d.temperature <= 25 ? 'Óptima' : 'No ideal';

    this.sensorCards[2].value = `${d.co2} ppm`;
    this.sensorCards[2].status = d.co2 <= 1000 ? 'Normal' : 'Alta concentración';

    this.sensorCards[3].value = `${d.humidity}%`;
    this.sensorCards[3].status = d.humidity >= 50 && d.humidity <= 70 ? 'Ideal' : 'No ideal';
  }
}
