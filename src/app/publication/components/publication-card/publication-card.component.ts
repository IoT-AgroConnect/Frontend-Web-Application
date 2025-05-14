import {Component, Input} from '@angular/core';
import {Publication} from "../../models/publication.model";
import {MatCardModule} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {Router} from "@angular/router";
import {PublicationsApiService} from "../../services/publications-api.service";
import {MatSnackBar} from "@angular/material/snack-bar";

/**
 * @component PublicationCardComponent
 * @description
 * Componente de presentación que muestra una tarjeta con información básica de una publicación.
 * Permite redirigir a la vista de detalle de una publicación específica al hacer clic en un botón.
 *
 * @features
 * - Muestra información de una publicación recibida por Input
 * - Redirige a la página de detalles de la publicación al hacer clic
 * - Utiliza Material Card y Button para diseño y estilo
 *
 * @dependencies
 * - Servicios:
 *    - PublicationsApiService
 * - Librerías externas:
 *    - Angular Material (MatCardModule, MatButton)
 *    - Angular Router
 *    - MatSnackBar (aunque aún no se usa activamente)
 *
 * @input
 * - `publication` (Publication): Objeto que contiene los datos a renderizar en la tarjeta
 *
 * @author Fiorella Jarama
 * @created 2025-05-14
 */
@Component({
  selector: 'publication-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButton
  ],
  templateUrl: './publication-card.component.html',
  styleUrl: './publication-card.component.css'
})
export class PublicationCardComponent {
  @Input() publication !: Publication;
  constructor(private router: Router,
              private publicationService: PublicationsApiService,
              private snackBar: MatSnackBar) { }
  getPublication(id: any) {
    this.router.navigateByUrl(`asesor/mis-publicaciones/${id}`);
  }

}
