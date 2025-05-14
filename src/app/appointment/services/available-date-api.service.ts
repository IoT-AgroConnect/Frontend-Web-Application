/**
 * @service AvailableDateApiService
 * @description
 * Servicio encargado de gestionar las operaciones HTTP relacionadas con la entidad `AvailableDate`.
 * Hereda funcionalidad base de `BaseService` para realizar operaciones CRUD de forma genérica.
 * Se conecta con el endpoint definido en `environment.availableDateURL`.
 *
 * @features
 * - Crear, obtener, actualizar y eliminar horarios disponibles de asesores
 * - Abstracción de la lógica común mediante herencia del `BaseService<T>`
 * - Reutilización de métodos HTTP con tipado fuerte para el modelo `AvailableDate`
 *
 * @dependencies
 * - Angular HttpClient
 * - BaseService (servicio genérico)
 * - Modelo: AvailableDate
 * - Environment (para obtener la URL del backend)
 *
 * @extends
 * BaseService<AvailableDate>
 *
 * @providedIn
 * 'root' (servicio singleton a nivel global)
 *
 * @example
 * this.availableDateApiService.create(newDate).subscribe(...);
 *
 * @author
 * Nadia Lucas
 * @created
 * 2025-05-14
 */

import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";


//Import the BaseService
import {BaseService} from "../../shared/services/base.service";
import {AvailableDate} from "../models/available_date.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AvailableDateApiService extends BaseService<AvailableDate>{
  constructor(http: HttpClient) {
    super(http);
    this.extraUrl = environment.availableDateURL;
  }



}
