
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Bicicleta} from './bicicleta';
import { BicicletaDetail } from './bicicleta-detail';

import { environment } from '../../environments/environment.prod';

const API_URL = environment.apiURL;
const bicicletas = '/bicicletas';


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
    * Crea una nueva Bicicleta
    * @param bicicleta La nueva Bicicleta
    * @returns La Bicicletacon su nuevo id si se pudo crear, false de los contrario
    */
    createBicicleta(bicicleta): Observable<BicicletaDetail> {
        return this.http.post<BicicletaDetail>(API_URL + bicicleta, bicicleta);
    }


	/**
    * Retorna un objeto Observable con el detalle de la Bicicleta que se reciben del API 
    * @returns El detalle de la Bicicleta
    */
    getBicicletaDetail(bicicletaId): Observable<BicicletaDetail> {
        return this.http.get<BicicletaDetail>(API_URL + '/bicicleta' + bicicletaId + '.json');
    }
}