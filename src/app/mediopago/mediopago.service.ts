import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mediopago } from './mediopago';
import { environment } from '../../environments/environment.prod';

const API_URL = environment.apiURL;
const mediosPago = '/mediosPago';

@Injectable({
  providedIn: 'root'
})
export class MediopagoService {

  constructor(private http: HttpClient) { }

  /**
   * Retorna todos los medios de pago.
   * @return lista de medios de pago.
   */
  getMediospago(): Observable<Mediopago[]> {
    return this.http.get<Mediopago[]>(API_URL + mediosPago);
  }

  /**
   * Retorna el medio de pago con el numero asociado.
   * @param numero Numero de la tarjeta.
   * @return Medio de pago encontrado.
   */
  getMediopago(numero: number): Observable<Mediopago> {
    return this.http.get<Mediopago>(API_URL + 'medio-' + numero + '.json');
  }
}