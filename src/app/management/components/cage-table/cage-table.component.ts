import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { MatButton } from "@angular/material/button";
import { MatTableModule, MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatIcon } from "@angular/material/icon";
import { RouterModule } from '@angular/router';

/**
 * @component CageTableComponent
 * @description Componente para mostrar una tabla con información de jaulas.
 * @features
 * - Paginación integrada para navegar entre jaulas.
 * - Permite redireccionar a edición, visualización o eliminación.
 * @dependencies
 * - Angular Material Table, Button, Paginator, Icon
 * @inputs
 * - dataSource: listado de jaulas.
 * @outputs
 * - editCage: emite ID para editar jaula.
 * - deleteCage: emite ID para eliminar jaula.
 * - goToCage: emite ID para visualizar detalles de jaula.
 * @author Johan Moreno
 * @created 2025-05-14
 */


@Component({
  selector: 'cage-table',
  standalone: true,
  imports: [
    MatButton,
    MatTableModule,
    MatPaginator,
    MatIcon,
    RouterModule // ✅ <-- ESTA LÍNEA FALTABA
  ],
  templateUrl: './cage-table.component.html',
  styleUrl: './cage-table.component.css'
})
export class CageTableComponent {
  @Input() dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['id', 'name', 'size', 'observations', 'actions'];
  @Output() editCage = new EventEmitter<number>();
  @Output() deleteCage = new EventEmitter<number>();
  @Output() goToCage = new EventEmitter<number>();
  @Output() goToMonitoring = new EventEmitter<number>();


}
