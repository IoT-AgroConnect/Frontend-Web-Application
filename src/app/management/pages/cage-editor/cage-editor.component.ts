import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {FormsModule, NgForm} from "@angular/forms";
import {Cage} from "../../models/cage.model";
import { MatSnackBar } from "@angular/material/snack-bar";
import {CageApiService} from "../../services/cage-api.service";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-cage-editor',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatButton,
    FormsModule,
    MatLabel,
    MatIcon
  ],
  templateUrl: './cage-editor.component.html',
  styleUrl: './cage-editor.component.css'
})
export class CageEditorComponent implements OnInit {
  // ID de la jaula a editar (se obtiene desde la URL)
  cageID = 0;

  // Modelo de datos para la jaula
  cage: Cage = {
    id: 0,
    breederId: 0,
    name: '',
    size: 0,
    observations: ''
  }

  // Referencia al formulario del template
  @ViewChild('cageForm', { static: false })
  cageForm!: NgForm;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cageService: CageApiService,
    private snackBar: MatSnackBar
  ) {}

  // Al iniciar el componente, obtenemos el ID de la jaula desde la URL y cargamos sus datos
  ngOnInit() {
    this.cageID = +this.route.snapshot.paramMap.get('id')!;
    this.getCage(this.cageID);
  }

  // Método para obtener los datos de la jaula desde el servicio
  getCage(id: number) {
    this.cageService.getOne(id).subscribe((data) => {
      this.cage = {
        id: data.id,
        breederId: data.breederId,
        name: data.name,
        size: data.size,
        observations: data.observations
      };
    });
  }

  // Maneja el envío del formulario. Si es válido, actualiza la jaula y redirige.
  onSubmit() {
    if (this.cageForm.form.valid) {
      this.cageService.update(this.cage.id, this.cage).subscribe(() => {
        this.router.navigate(['/criador/mis-animales']);
        this.snackBar.open('Jaula actualizada 🎉', '', { duration: 5000 });
      });
    }
  }

  // Cancela la edición y vuelve a la página anterior
  onCancel() {
    window.history.back();
  }
}
// Este componente permite editar los datos de una jaula existente.
// Utiliza el servicio CageApiService para obtener y actualizar los datos de la jaula
