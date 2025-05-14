import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

// Import the BaseService which contains common HTTP methods (CRUD operations)
import { BaseService } from "../../shared/services/base.service";
import { Cage } from "../models/cage.model";
import { catchError } from "rxjs";
import { Animal } from "../models/animal.model";

@Injectable({
  providedIn: 'root' // Makes this service available application-wide
})
export class CageApiService extends BaseService<Cage> {
  constructor(http: HttpClient) {
    super(http); // Call BaseService constructor
    this.extraUrl = environment.cageURL; // Set the API endpoint for cage-related operations
  }

  // Retrieves animals associated with a specific cage ID
  getAnimalsByCageId(cageId: number) {
    this.setToken(); // Set the authorization token in the request headers
    return this.http
      .get<Animal[]>(this.buildPath() + '/' + cageId + '/animals', this.httpOptions)
      .pipe(catchError(this.handleError)); // Handle errors in the HTTP call
  }
}
