import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-iot-monitoring',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './iot-monitoring.component.html',
  styleUrls: ['./iot-monitoring.component.css'] // corregido también el nombre: "styleUrls"
})
export class IotMonitoringComponent {
  cageId!: number;

  constructor(private route: ActivatedRoute) {
    this.cageId = Number(this.route.snapshot.paramMap.get('id'));
  }

  sensorCards = [
    { icon: 'water_drop', label: 'Agua', value: '650ml', status: 'Buen estado', bg: '#e3f2fd' },
    { icon: 'device_thermostat', label: 'Temperatura', value: '21°C', status: 'Óptima', bg: '#fff8e1' },
    { icon: 'air', label: 'CO₂', value: '780 ppm', status: 'Normal', bg: '#e8f5e9' },
    { icon: 'humidity_low', label: 'Humedad', value: '56%', status: 'Ideal', bg: '#f3e5f5' },
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
}
