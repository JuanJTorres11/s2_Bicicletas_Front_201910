import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Marca} from './marca';
import {Observable} from 'rxjs';

const API_URL = "../../assets/";
const marcas = "marcas.json";

@Injectable()
export class MarcaService{

    constructor(private http: HttpClient){

    }

    getMarcas(): Observable<Marca[]>{
        return this.http.get<Marca[]>(API_URL + marcas);
    }
}