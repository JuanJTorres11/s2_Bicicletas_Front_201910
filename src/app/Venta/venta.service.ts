import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Venta} from './venta';
import { Bicicleta } from 'src/app/bicicleta/bicicleta';

const API_URL = "../../assets/";
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
    * @param venta La informacion del comprador a crear. 
    * @returns The comprador with its new id if it was created, false if it wasn't
    */
   createVenta(venta): Observable<Venta> {
    return this.http.post<Venta>(API_URL + ventas, venta);
}

	// /**
    // *Retorna el observable del CompradorDetail
    // * @param id id del comprador a buscar. 
    // * @returns CompradorDetail
    // */
    // getCompradorDetail(id:number): Observable<Venta> {
    //     return this.http.get<Venta>(API_URL + ventas + '-' + id + '.json');
    // }

        /***
     * Obtiene la lista de compradores
     */
    getVentas(): Observable<Venta[]>{
        return this.http.get<Venta[]>(API_URL + ventas);
    }
}