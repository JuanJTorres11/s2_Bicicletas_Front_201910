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
    getVendedorVentas(id:number):Observable<any> {
        return this.http.get(API_URL + "/venta");
    }
}