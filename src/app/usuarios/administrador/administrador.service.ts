
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Venta } from '../../venta/venta';

const API_URL = environment.apiURL;

/**
* Proveedor de servicio para los componentes de Vendedor
*/
@Injectable()
export class AdministradorService {

    /**
    * Constructor del servicio
    * @param http The HttpClient
    */
    constructor(private http: HttpClient) {}

    /**
     * Ventas del vendedor con id especificado.
     * @param id Identificador del vendedor del que se quieren recuperar las ventas.
     */
    getVentas():Observable<Venta[]> {
        return this.http.get<Venta[]>(API_URL + "/venta");
    }

    putVentas(venta: Venta):Observable<Venta> {
        return this.http.put<Venta>(API_URL + "/venta/" + venta.id, venta);
      }
}

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

