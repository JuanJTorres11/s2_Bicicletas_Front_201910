import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Venta} from './venta';
import(environment) from '../../../environments/environment';
//import { Bicicleta } from 'src/app/bicicleta/bicicleta';

const API_URL = environment.apiURL + "/venta";
const ventas = '/ventas.json';

@Injectable()
export class VentaService {

    /**
    * Constructor del servicio
    * @param http The HttpClient
    */
    constructor(private http: HttpClient) {}

    	/**
    * Crea una nueva venta.
    * @param venta La informacion de la venta a crear. 
    * @returns The venta with its new id if it was created, false if it wasn't
    */
   createVenta(venta): Observable<Venta> {
    return this.http.post<Venta>(API_URL + ventas, venta);
}

	 /**
     *Retorna el observable del CompradorDetail
     * @param id id del comprador a buscar. 
     * @returns CompradorDetail
     */
     getVenta(id:number): Observable<Venta> {
         return this.http.get<Venta>(API_URL + ventas + '-' + id + '.json');
     }

        /***
     * Obtiene la lista de ventas
     */
    getVentas(): Observable<Venta[]>{
        return this.http.get<Venta[]>(API_URL + ventas);
    }
    
        /**
     * Actualiza un comprador
     * @param id Identificador del comprador a actualizar
     * @param comprador Objeto con los cambios realizados.
     */
    putVenta(id:number, venta:Venta): Observable<Venta> {
        return this.http.put<Venta>(API_URL + "/" + id, venta);
    }
}