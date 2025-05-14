import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { MatButton } from "@angular/material/button";
import { MatTableModule, MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatIcon } from "@angular/material/icon";

/**
 * @component CageTableComponent
 * @description
 * Componente de presentación que muestra una tabla informativa sobre las jaulas.
 * Permite al usuario editar, eliminar o navegar a la vista detallada de una jaula seleccionada.
 *
 * @features
 * - Recibe un objeto `MatTableDataSource` como entrada y lo muestra usando una tabla (`mat-table`)
 * - Permite paginación mediante `MatPaginator`
 * - Emitir eventos para editar, eliminar o navegar a la vista detallada de una jaula
 *
 * @dependencies
 * - Angular Material:
 *    - MatButton
 *    - MatTableModule
 *    - MatPaginator
 *    - MatIcon
 *
 * @author Fiorella Jarama
 * @created 2025-05-14
 */
@Component({
  selector: 'cage-table',
  standalone: true,
  imports: [
    MatButton,
    MatTableModule,
    MatPaginator,
    MatIcon
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

}
