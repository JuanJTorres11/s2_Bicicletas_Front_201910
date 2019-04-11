import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Orden} from './orden';
import {OrdenDetail} from './orden-detail';
import {Observable} from 'rxjs';

const API_URL = "../../assets/";
const ordenes = "ordenes.json";

/**
 * El proveedor de servicios relacionados con las ordenes
 */
@Injectable()
export class OrdenService{
    
     /**
     * Constructor del servicio de la orden
     * @param http Cliente http para los requests
     */
    constructor(private http: HttpClient){

    }

    /***
     * Obtiene la lista de ordenes
     */
    getOrdenes(): Observable<Orden[]>{
        return this.http.get<Orden[]>(API_URL + ordenes);
    }

    /**
     * Obtener una orden con el id especificado
     * @param ordenId Id de la orden a obtener
     */
    getOrdenDetail(ordenId): Observable<OrdenDetail>{
        return this.http.get<OrdenDetail>((API_URL + '/orden' + ordenId + '.json'));
    }
}