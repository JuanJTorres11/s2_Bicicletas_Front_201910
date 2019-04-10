import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Comprador} from './comprador';
import {CompradorDetail} from "./comprador-Detail"

const API_URL = "../../assets/";
const compradores = '/comprador.json';

@Injectable()
export class CompradorService {

    /**
    * Constructor del servicio
    * @param http The HttpClient
    */
    constructor(private http: HttpClient) {}

    	/**
    * Crea un nuevo comprador
    * @param comprador La informacion del comprador a crear. 
    * @returns The comprador with its new id if it was created, false if it wasn't
    */
   createComprador(comprador): Observable<CompradorDetail> {
    return this.http.post<CompradorDetail>(API_URL + compradores, comprador);
}

	/**
    *Retorna el observable del CompradorDetail
    * @param id id del comprador a buscar. 
    * @returns CompradorDetail
    */
    getCompradorDetail(id:number): Observable<CompradorDetail> {
        return this.http.get<CompradorDetail>(API_URL + compradores + '-' + id + '.json');
    }

        /***
     * Obtiene la lista de compradores
     */
    getCompradores(): Observable<Comprador[]>{
        return this.http.get<Comprador[]>(API_URL + compradores);
    }
}