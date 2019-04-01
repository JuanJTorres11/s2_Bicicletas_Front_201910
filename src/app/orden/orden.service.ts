import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Orden} from './orden';
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
}