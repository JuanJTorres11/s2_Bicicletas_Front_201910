
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Bicicleta} from './bicicleta';
import { BicicletaDetail } from './bicicleta-detail';
import {Resena} from './resena';

import { environment } from '../../environments/environment.prod';

const API_URL = environment.apiURL;
const bicicletas = '/bicicletas';

const API_URL2 = "../../assets/";
const bicicletas2 = '/bicicletas.json';
const resenas = '/resenas';


/**
* Los servicios relacionados con las bicicletas
*/
@Injectable()
export class BicicletaService {

    /**
    * Constructor del servicio
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) {}

    /**
    * Retorna un objeto Observable  que contien la lista de bocicletas que se reciben del API
    * @returns The list of bikes in real time
    */
    getBicicletas(): Observable<Bicicleta[]> {
        return this.http.get<Bicicleta[]>(API_URL + bicicletas);
    }

	/**
    * Retorna un objeto Observable con el detalle de la Bicicleta que se reciben del API 
    * @returns El detalle de la Bicicleta
    */
    getBicicletaDetail(bicicletaId): Observable<BicicletaDetail> {
        return this.http.get<BicicletaDetail>(API_URL + bicicletas + '/' + bicicletaId);
    }


	/**
    * Crea una nueva Bicicleta
    * @param bicicleta La nueva Bicicleta
    * @returns La Bicicletacon su nuevo id si se pudo crear, false de los contrario
    */
    createBicicleta(bicicleta): Observable<BicicletaDetail> {
        return this.http.post<BicicletaDetail>(API_URL + bicicletas, bicicleta);
    }

	/**
    * Elimia una Bicicleta
	* @param bicicletaId El id de la Bicicleta
    * @returns True si se pudo eliminar, false de lo contrario
    */
    deleteBicicleta(bicicletaId): Observable<BicicletaDetail> {
        return this.http.delete<BicicletaDetail>(API_URL + bicicletas + '/' + bicicletaId);
    }


	/**
        * Actualiza una bicicleta
        * @param bicicleta The updated bike
        * @returns The updated bike
        */
    updateBicicleta(bicicleta): Observable<BicicletaDetail> {
        return this.http.put<BicicletaDetail>(API_URL + bicicletas + '/' + bicicleta.id, bicicleta);
    }

	
	 /**
    * Crea una reseña
    * @param resena La resena
    * @returns True si se pudo crear, false de lo contrario
    */
    createResena(bicicletaId, resena): Observable<Resena> {
        return this.http.post<Resena>(API_URL + bicicletas + '/' + bicicletaId + resenas, resena);
    }

	 /**
    * Retorna una reseña
    * @param resenaId id de la resena
    * @returns La resena
    */
    getResena(bicicletaId, resenaId): Observable<Resena> {
        return this.http.get<Resena>(API_URL + bicicletas + '/' + bicicletaId + resenas + '/' + resenaId);
    }

	 /**
    * Actualiza una reseña
    * @param resena La resena
    * @returns True si se pudo actualizar, false de lo contrario
    */
    updateResena(bicicletaId, resena): Observable<Resena> {
        return this.http.put<Resena>(API_URL + bicicletas + '/' + bicicletaId + resenas + '/' + resena.id, resena);
    }

	/**
    * Elimia una Resena
	* @param bicicletaId El id de la Bicicleta
	* @param resenaId El id de la resena
    * @returns True si se pudo eliminar, false de lo contrario
    */
    deleteResena(bicicletaId, resenaId): Observable<Resena> {
        return this.http.delete<Resena>(API_URL + bicicletas + '/' + bicicletaId + resenas + '/' + resenaId);
    }

	
}