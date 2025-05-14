/**
 * @component ConfirmationDialogComponent
 * @description
 * Diálogo reutilizable de confirmación utilizado para validar decisiones del usuario,
 * como eliminaciones u operaciones críticas. Recibe un mensaje personalizado y retorna
 * `true` o `false` al cerrarse, según la acción elegida.
 *
 * @features
 * - Recibe mensaje por `MAT_DIALOG_DATA`
 * - Muestra un diálogo con botones de confirmar/cancelar
 * - Emite `true` si se confirma, `false` si se cancela
 *
 * @dependencies
 * - Angular Material Dialog (Title, Content, Actions)
 * - MatDialogRef, MAT_DIALOG_DATA (Inyección de datos y control del cierre)
 * - MatButton
 *
 * @inputs
 * - data.message: string – Mensaje que se mostrará en el diálogo
 *
 * @outputs
 * - Resultado booleano al cerrar el diálogo
 *
 * @author Nadia Lucas
 * @created 2025-05-14
 */

import {Component, Inject} from '@angular/core';
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogTitle,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton
  ],
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.css'
})
export class ConfirmationDialogComponent {
  message = "¿Estás seguro?";

  constructor(private dialogRef: MatDialogRef<ConfirmationDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data: any) {
    this.message = data.message;
  }

  onConfirm(){
    this.dialogRef.close(true);
  }

  onCancel(){
    this.dialogRef.close(false);
  }
}
