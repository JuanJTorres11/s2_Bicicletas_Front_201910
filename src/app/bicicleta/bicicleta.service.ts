
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Bicicleta} from './bicicleta';
import { BicicletaDetail } from './bicicleta-detail';

const API_URL = "../../assets/";
const bicicletas = '/bicicletas.json';


/**
* The service provider for everything related to bikes
*/
@Injectable()
export class BicicletaService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) {}

    /**
    * Returns the Observable object containing the list of books retrieved from the API
    * @returns The list of bikes in real time
    */
    getBicicletas(): Observable<Bicicleta[]> {
        return this.http.get<Bicicleta[]>(API_URL + bicicletas);
    }

	/**
    * Creates a new book
    * @param book The new book
    * @returns The book with its new id if it was created, false if it wasn't
    */
    createBicicleta(bicicleta): Observable<BicicletaDetail> {
        return this.http.post<BicicletaDetail>(API_URL + bicicleta, bicicleta);
    }


	/**
    * Returns the Observable object with the details of an author retrieved from the API
    * @returns The author details
    */
    getBicicletaDetail(bicicletaId): Observable<BicicletaDetail> {
        return this.http.get<BicicletaDetail>(API_URL + '/bicicleta' + bicicletaId + '.json');
    }
}