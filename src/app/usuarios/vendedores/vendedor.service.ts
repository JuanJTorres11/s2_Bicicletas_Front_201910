import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Vendedor} from './vendedor';
import {VendedorDetail} from "./vendedorDetail"

const API_URL = "../../assets/";
const vendedores = '/vendedor.json';

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
        return this.http.get<VendedorDetail>(API_URL + vendedores + '-' + id + '.json');
    }
}