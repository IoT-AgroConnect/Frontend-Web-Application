/**
 * @component EmptyViewComponent
 * @description
 * Componente visual reutilizable que muestra una vista informativa cuando no hay datos disponibles para mostrar.
 * Ideal para mantener coherencia visual en pantallas vacías, como listados de publicaciones, asesores, etc.
 *
 * @features
 * - Muestra un `Card` de Angular Material con título personalizado
 * - Permite reutilización mediante `@Input() title`
 * - Se usa en componentes que dependen de resultados o listas vacías
 *
 * @dependencies
 * - Angular Material:
 *    - MatCard, MatCardTitle, MatCardSubtitle, MatCardHeader, MatCardContent, MatCardActions
 *    - MatButton (opcional, si se desea extender la vista)
 *
 * @inputs
 * - title: string – Texto a mostrar como encabezado del mensaje de vista vacía
 *
 * @author Nadia Lucas
 * @created 2025-05-14
 */


import {Component, Input} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";

@Component({
  selector: 'app-empty-view',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatCardContent
  ],
  templateUrl: './empty-view.component.html',
  styleUrl: './empty-view.component.css'
})
export class EmptyViewComponent {
  @Input() title: string;

  constructor() {
    this.title = 'Empty View';
  }
}
