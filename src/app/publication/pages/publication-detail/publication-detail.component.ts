import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PublicationsApiService } from "../../services/publications-api.service";
import {ActivatedRoute} from "@angular/router";
import {Publication} from "../../models/publication.model";
import {MatButton} from "@angular/material/button";
import {DatePipe} from "@angular/common";
import {MatSnackBar} from "@angular/material/snack-bar";

/**
 * @component PublicationDetailComponent
 * @description
 * Componente que muestra los detalles de una publicación seleccionada y permite su eliminación tras confirmar la acción.
 * Este componente se utiliza para visualizar una publicación específica y tiene un mecanismo de confirmación antes de realizar la eliminación.
 *
 * @features
 * - Muestra los detalles de la publicación seleccionada
 * - Permite al usuario eliminar la publicación con confirmación
 * - Utiliza un diálogo de confirmación para la eliminación
 * - Muestra un mensaje de éxito o error después de la eliminación
 * - Redirige al usuario de vuelta a la página anterior tras la eliminación exitosa
 *
 * @dependencies
 * - Services:
 *    - PublicationsApiService
 * - Librerías externas:
 *    - Angular Material Dialog, Button, Card, SnackBar, Icon
 * - Componentes reutilizables:
 *    - ConfirmationDialogComponent
 *
 * @author Fiorella Jarama
 * @created 2025-05-14
 */
// Import the ConfirmationDialogComponent
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from "../../../public/components/confirmation-dialog/confirmation-dialog.component";
import { Observable } from "rxjs";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-publication-detail',
  standalone: true,
  imports: [
    MatCardModule,
    MatButton,
    DatePipe,
    MatIcon
  ],
  templateUrl: './publication-detail.component.html',
  styleUrl: './publication-detail.component.css'
})
export class PublicationDetailComponent {
  publication = {} as Publication;

  constructor(private publicationsService: PublicationsApiService,
              private activatedRouter: ActivatedRoute,
              private snackBar: MatSnackBar,
              private dialog: MatDialog) {
    this.activatedRouter.params.subscribe(
      params => {
        this.getPublication(params['id']);
      }
    );
  }

  getPublication(id: any) {
    this.publicationsService.getOne(id).subscribe((publication: Publication) => {
      this.publication = publication;
    });
  }

  confirmDeletion(): Observable<boolean> {
    // Open a dialog to confirm the deletion
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: `¿Estás seguro de querer eliminar esta publicación? Los criadores ya no podrán visualizarla.`
      }
    });
    // Return the result of the dialog
    return dialogRef.afterClosed();
  }

  deletePublication(id: any) {
    // First, confirm the deletion
    this.confirmDeletion().subscribe(confirmado => {
      if (confirmado) {
        // If the deletion is confirmed, delete the publication
        this.publicationsService.delete(id).subscribe(() => {
            this.snackBar.open('Publicación eliminada con éxito😎', 'Cerrar', {
              duration: 2000,
            }).afterDismissed().subscribe(() => { this.goBack() });
          }, error => {
            this.snackBar.open('Error al eliminar la publicación', 'Cerrar', {
              duration: 2000,
            });
          }
        );
      }
    })
  }

  goBack() {
    window.history.back();
  }
}
