import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Orden} from './orden';
import {OrdenDetail} from './orden-detail';
import {Observable} from 'rxjs';

const API_URL = "../../assets/";
const ordenes = "ordenes.json";

@Injectable()
export class OrdenService{

    constructor(private http: HttpClient){

    }

    getOrdenes(): Observable<Orden[]>{
        return this.http.get<Orden[]>(API_URL + ordenes);
    }

    getOrdenDetail(ordenId): Observable<OrdenDetail>{
        return this.http.get<OrdenDetail>((API_URL + '/orden' + ordenId + '.json'));
    }
}