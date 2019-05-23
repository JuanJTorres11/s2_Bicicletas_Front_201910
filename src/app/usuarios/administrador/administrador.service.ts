import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { Orden } from 'src/app/orden/orden';
import { OrdenDetail } from 'src/app/orden/orden-detail';

const API_URL = environment.apiURL;
const ordenes = '/ordenes';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(private http: HttpClient) { }

  /**
   * Retorna todas las ordenes.
   * @returns Lista de las ordenes.
   */
  getOrdenes(): Observable<OrdenDetail[]> {
    return this.http.get<OrdenDetail[]>(API_URL + ordenes);
  }
}
