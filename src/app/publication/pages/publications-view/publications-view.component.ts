/**
 * @component PublicationsViewComponent
 * @description
 * Componente encargado de mostrar todas las publicaciones realizadas por asesores.
 * Utiliza un componente de tarjeta en modo solo lectura para cada publicación y
 * una vista vacía si no hay resultados disponibles.
 *
 * @features
 * - Llama al servicio para obtener todas las publicaciones
 * - Renderiza cada publicación usando `PublicationReadonlyCardComponent`
 * - Muestra `EmptyViewComponent` si no hay publicaciones
 *
 * @dependencies
 * - Services:
 *    - PublicationsApiService
 * - Components:
 *    - PublicationReadonlyCardComponent
 *    - EmptyViewComponent
 * - Angular Router
 * - Angular Directivas:
 *    - NgIf
 *    - NgForOf
 *
 * @author Nadia Lucas
 * @created 2025-05-14
 */

import { Component, OnInit } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Publication} from "../../models/publication.model";
import {PublicationsApiService} from "../../services/publications-api.service";
import {Router} from "@angular/router";

import {PublicationReadonlyCardComponent} from "../../components/publication-readonly-card/publication-readonly-card.component";
import {EmptyViewComponent} from "../../../public/components/empty-view/empty-view.component";

@Component({
  selector: 'app-publications-view',
  standalone: true,
    imports: [
        NgForOf,
        PublicationReadonlyCardComponent,
        EmptyViewComponent,
        NgIf
    ],
  templateUrl: './publications-view.component.html',
  styleUrl: './publications-view.component.css'
})
export class PublicationsViewComponent implements OnInit {
  publications: Publication[] = [];

  constructor(private publicationsService: PublicationsApiService,
              private router: Router) { }

  ngOnInit() {
    this.getPublications();
  }

  getPublications() {
    this.publicationsService.getAll().subscribe((res) => {
      res.forEach((publication) => {
        let publicationData = {} as Publication;
        publicationData.id = publication.id;
        publicationData.title = publication.title;
        publicationData.description = publication.description;
        publicationData.date = publication.date;
        publicationData.image = publication.image;
        publicationData.advisorId = publication.advisorId;
        this.publications.push(publicationData);
      });
    });
  }


}
