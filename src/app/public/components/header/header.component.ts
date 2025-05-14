/**
 * @component HeaderComponent
 * @description
 * Componente de cabecera general de la aplicación.
 * Permite mostrar el `toolbar` principal y manejar la apertura o cierre del `sidenav`.
 * También verifica si el usuario está autenticado para mostrar opciones condicionales.
 *
 * @features
 * - Botón de menú que emite evento para abrir/cerrar el sidenav
 * - Verificación del estado de sesión del usuario
 *
 * @dependencies
 * - Angular Material Toolbar, IconButton, Icon
 * - Servicios:
 *    - UserApiService
 * - Angular Directivas:
 *    - NgIf
 *
 * @outputs
 * - `toggleSidenav`: Evento booleano que indica si el `sidenav` debe abrirse o cerrarse
 *
 * @author Nadia Lucas
 * @created 2025-05-14
 */

import { Component, EventEmitter, Output } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {UserApiService} from "../../../user/services/user-api.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconButton,
    MatIcon,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isOpen = false;

  @Output() toggleSidenav = new EventEmitter<boolean>();

  constructor(private userApiService: UserApiService) {
  }

  toggleDrawer() {
    this.isOpen = !this.isOpen;
    this.toggleSidenav.emit(this.isOpen);
  }

  isLogged(){
    return this.userApiService.isLogged();
  }
}
