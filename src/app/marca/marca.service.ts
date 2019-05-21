import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Marca} from './marca';
import {MarcaDetail} from './marca-detail';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { Bicicleta } from '../bicicleta/bicicleta';

const API_URL = environment.apiURL;
const marcas = '/marcas';
const bicicletas = '/bicicletas';

/**
 * El proveedor de servicios relacionados con las marcas
 */
@Injectable()
export class MarcaService{

    /**
     * Constructor del servicio de la marca
     * @param http Cliente http para los requests
     */
    constructor(private http: HttpClient){}

    /***
     * Obtiene la lista de marcas
     */
    getMarcas(): Observable<Marca[]>{
        return this.http.get<Marca[]>(API_URL + marcas);
    }

    /**
     * Obtener una marca con el id especificado
     * @param marcaId Id de la marca a obtener
     */
    getMarcaDetail(marcaId): Observable<MarcaDetail>{
        return this.http.get<MarcaDetail>((API_URL + marcas + '/' + marcaId));
    }

    /**
     * Crea una marca
     * @param marca Marca a crear
     */
    createMarca(marca): Observable<MarcaDetail> {
        return this.http.post<MarcaDetail>(API_URL + marcas, marca);
    }

    /**
     * Actualiza una marca
     * @param marca Marca a actualizar
     */
    updateMarca( marca): Observable<MarcaDetail>{
        return this.http.put<MarcaDetail>(API_URL + marcas + '/' + marca.id, marca);
    }

    /**
    * Elimia una marca
	* @param marcaId El id de la marca
    * @returns True si se pudo eliminar, false de lo contrario
    */
   deleteMarca(marcaId): Observable<MarcaDetail> {
    return this.http.delete<MarcaDetail>(API_URL + marcas + '/' + marcaId);
}

/**
   * Obtiene las bicicletas de la marca con el nombre dado.
   * @param nombre Nombre de la marca.
   * @return Lista de bicicletas de la marca.
   */
  getMarcaBicicletas(id: number): Observable<Bicicleta[]> {
    console.log(API_URL + marcas + '/' + id + bicicletas);
    return this.http.get<Bicicleta[]>(API_URL + marcas + '/' + id + bicicletas);
  }

}