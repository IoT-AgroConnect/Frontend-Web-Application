/**
 * @component SignupBreederComponent
 * @description
 * Componente contenedor que encapsula la vista de registro para criadores.
 * Renderiza el formulario de registro definido en `RegisterBreederComponent`.
 *
 * @features
 * - Utiliza `RegisterBreederComponent` para mostrar el formulario de registro de criadores
 * - Se encarga solo de estructurar la vista correspondiente a la ruta de registro
 *
 * @dependencies
 * - Components:
 *    - RegisterBreederComponent
 *
 * @author Nadia Lucas
 * @created 2025-05-14
 */

import { Component } from '@angular/core';
import { RegisterBreederComponent } from "../../components/register-breeder/register-breeder.component";

@Component({
  selector: 'app-signup-breeder',
  standalone: true,
  imports: [
    RegisterBreederComponent
  ],
  templateUrl: './signup-breeder.component.html',
  styleUrl: './signup-breeder.component.css'
})
export class SignupBreederComponent {

}
