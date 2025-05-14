import {Component, Input} from '@angular/core';
import {Animal} from "../../models/animal.model";
import {MatCardModule} from "@angular/material/card";
import {ActivatedRoute, Router} from "@angular/router";
import {NgClass} from "@angular/common";

/**
 * @component AnimalCardComponent
 * @description
 * Componente de presentación que muestra una tarjeta informativa sobre un animal.
 * Permite al usuario navegar a una vista detallada del animal seleccionado.
 *
 * @features
 * - Recibe un objeto `Animal` como entrada y lo muestra usando una tarjeta (`mat-card`)
 * - Permite redirigir a la ruta de detalle del animal mediante `getInformation()`
 *
 * @dependencies
 * - Angular Material:
 *    - MatCardModule
 * - Angular Router:
 *    - Router
 *    - ActivatedRoute
 * - Commons:
 *    - NgClass
 *
 * @author Fiorella Jarama
 * @created 2025-05-14
 */
@Component({
  selector: 'animal-card',
  standalone: true,
  imports: [
    MatCardModule,
    NgClass
  ],
  templateUrl: './animal-card.component.html',
  styleUrl: './animal-card.component.css'
})
export class AnimalCardComponent {
  @Input() animal!: Animal;

  constructor(private router: Router,
              private route: ActivatedRoute) {}

  getInformation(id: number){
    this.router.navigate(['informacion', id], {relativeTo: this.route});
  }
}
