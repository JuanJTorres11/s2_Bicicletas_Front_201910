import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mediopago } from './mediopago';
import { environment } from '../../environments/environment.prod';

const API_URL = environment.apiURL;
const mediosPago = '/medioPagos';

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
    return this.http.get<Mediopago[]>(API_URL + '/' + localStorage.getItem('rol') + '/' + localStorage.getItem('id') + '/mediosPago');
  }

  /**
   * Retorna el medio de pago con el numero asociado.
   * @param numero Numero de la tarjeta.
   * @return Medio de pago encontrado.
   */
  getMediopago(numero: number): Observable<Mediopago> {
    return this.http.get<Mediopago>(API_URL + mediosPago + '/' + numero);
  }

  /**
   * Actualiza el medio de pago con el número dado
   * @param numero Numero de la tarjeta.
   * @param mediopago Informacion del medio de pago.
   * @return Informacion actualizada
   */
  updateMediopago(numero: number, mediopago: Mediopago): Observable<Mediopago> {
    return this.http.put<Mediopago>(API_URL + mediosPago + '/' + numero, mediopago);
  }

  /**
   * Elimina el medio de pago con el numero dado.
   * @param numero Numero del medio de pago que se desea eliminar.
   * @return Medio de pago eliminado.
   */
  deleteMediopago(numero: number): Observable<Mediopago> {
    return this.http.delete<Mediopago>(API_URL + mediosPago + '/' + numero);
  }

  /**
   * Crea un medio de pago con la informacion dada.
   * @param mediopago Medio de pago que se va a crear.
   * @return Medio de pago creado.
   */
  createMediopago(mediopago): Observable<Mediopago> {
    return this.http.post<Mediopago>(API_URL + mediosPago, mediopago);
  }
}
