import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Comprador } from './comprador';
import { CompradorDetail } from "./comprador-Detail"
//import { Bicicleta } from 'src/app/bicicleta/bicicleta';
import { environment } from '../../../environments/environment';

// const API_URL = "../../assets/";
const API_URL = environment.apiURL + "/comprador";
//const carrito = '/carrito.json';
const compradores = '/compradores.json';
//const mediosPago = '/mediosPago.json';

@Injectable()
export class CompradorService {

    /**
    * Constructor del servicio
    * @param http The HttpClient
    */
    constructor(private http: HttpClient) { }

    /**
* Crea un nuevo comprador
* @param comprador La informacion del comprador a crear. 
* @returns The comprador with its new id if it was created, false if it wasn't
*/
    createComprador(comprador): Observable<CompradorDetail> {
        return this.http.post<CompradorDetail>(API_URL + compradores, comprador);
    }

	/**
    *Retorna el observable del CompradorDetail
    * @param id id del comprador a buscar. 
    * @returns CompradorDetail
    */
    getCompradorDetail(id: number): Observable<CompradorDetail> {
        return this.http.get<CompradorDetail>(API_URL + compradores + '-' + id + '.json');
    }

//     /***
//  * Obtiene la lista de compradores
//  */
//     getCompradorCarrito(): Observable<Bicicleta[]> {
//         return this.http.get<Bicicleta[]>(API_URL + carrito);
//     }

//     /**
//  * Obtiene los medios de pago del vendedor.
//  * @param id Identificador del vendedor
//  */
//     getCompradorMediosPago(id: number): Observable<any> {
//         return this.http.get(API_URL + "/" + id + "/mediosPago");
//     }

        /***
 * Obtiene la lista de compradores
 */
getCompradores(): Observable<Comprador[]> {
    return this.http.get<Comprador[]>(API_URL + compradores);
}   
}