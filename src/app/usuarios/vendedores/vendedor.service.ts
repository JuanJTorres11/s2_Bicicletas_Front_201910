import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {VendedorDetail} from "./vendedorDetail"
import { environment } from '../../../environments/environment';

const API_URL = environment.apiURL + "/vendedores";

/**
* Proveedor de servicio para los componentes de Vendedor
*/
@Injectable()
export class VendedorService {

    /**
    * Constructor del servicio
    * @param http The HttpClient
    */
    constructor(private http: HttpClient) {}

	/**
    *Retorna el observable del VendedorDetail
    * @returns VendedorDetail
    */
    getVendedorDetail(id:number): Observable<VendedorDetail> {
        return this.http.get<VendedorDetail>(API_URL + "/" + id );
    }

    /**
     * Actualiza un vendedor
     * @param id Identificador del vendedor a actualizar
     * @param vendedor Objeto con los cambios realizados.
     */
    putVendedor(id:number, vendedor:VendedorDetail): Observable<VendedorDetail> {
        return this.http.put<VendedorDetail>(API_URL + "/" + id, vendedor);
    }

    /**
     * Eliminar un vendedor
     * @param id Identificador del vendedor
     */
    deleteVendedor (id:number) {
        this.http.delete<VendedorDetail>(API_URL + "/" + id);
    }

    /**
     * Obtiene los medios de pago del vendedor.
     * @param id Identificador del vendedor
     */
    getVendedorMediosPago (id:number): Observable<any> {
        return this.http.get(API_URL + "/" + id + "/mediosPago");
    }

    /**
     * Ventas del vendedor con id especificado.
     * @param id Identificador del vendedor del que se quieren recuperar las ventas.
     */
    getVendedorVentas(id:number):Observable<any> {
        return this.http.get(API_URL + "/" + id + "/ventas");
    }

    /**
     * Agrega una venta asociada al vendedor.
     * @param id Identificador del vendedor.
     * @param venta Objeto de la venta a agregar.
     */
    postVendedorVentas(id:number, venta): Observable<any> {
        return this.http.get(API_URL + "/" + id + "/ventas", venta);
    }
    
}