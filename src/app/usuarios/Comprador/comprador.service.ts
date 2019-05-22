import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Comprador } from './comprador';
import { CompradorDetail } from "./comprador-detail";
//import { Bicicleta } from 'src/app/bicicleta/bicicleta';
import { environment } from '../../../environments/environment';

//const API_URL = environment.apiURL + "/compradores";
const API_URL = environment.apiURL + "../../assets/";
//const carrito = '/carrito.json';
 const compradores = '/compradores';
//const mediosPago = '/mediosPago.json';

@Injectable()
export class CompradorService {

    /**
    * Constructor del servicio
    * @param http The HttpClient
    */
    constructor(private http: HttpClient) { }

	/**
    *Retorna el observable del CompradorDetail
    * @param id id del comprador a buscar. 
    * @returns CompradorDetail
    */
    getCompradorDetail(id: number): Observable<CompradorDetail> {
       // return this.http.get<CompradorDetail>(API_URL + "/" + id);
        return this.http.get<CompradorDetail>(API_URL + "comprador"+ id + ".json");
    }

    /**
 * Obtiene los medios de pago del comprador.
 * @param id Identificador del comprador
 */
    getCompradorMediosPago(id: number): Observable<any> {
        return this.http.get(API_URL + "/" + id + "/mediosPago");
    }

    /**
    * Returns the Observable object containing the list of comprador retrieved from the API
    * @returns The list of comprador in real time
    */
    getCompradores(): Observable<Comprador[]> {
        return this.http.get<Comprador[]>(API_URL);
    }

    getCompradorOrden(id: number): Observable<any> {
        return this.http.get(API_URL + "/" + id + "/ordenes");
    }

    /**
     * Actualiza un comprador
     * @param id Identificador del comprador a actualizar
     * @param comprador Objeto con los cambios realizados.
     */
    putComprador(id: number, comprador: CompradorDetail): Observable<CompradorDetail> {
        return this.http.put<CompradorDetail>(API_URL + "/" + id, comprador);
    }

    /**
     * Eliminar un comprador
     * @param id Identificador del comprador
     */
    deleteVendedor(id: number) {
        this.http.delete<CompradorDetail>(API_URL + "/" + id);
    }

}