import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Marca} from './marca';
import {MarcaDetail} from './marca-detail';
import {Observable} from 'rxjs';

const API_URL = "../../assets/";
const marcas = "marcas.json";

@Injectable()
export class MarcaService{

    constructor(private http: HttpClient){

    }

    /***
     * Obtiene la lista de marcas
     */
    getMarcas(): Observable<Marca[]>{
        return this.http.get<Marca[]>(API_URL + marcas);
    }

    /**
     * Obtener una marca con el id especificad
     * @param marcaId Id de la marca a obtener
     */
    getMarcaDetail(marcaId): Observable<MarcaDetail>{
        return this.http.get<MarcaDetail>((API_URL + '/marca' + marcaId + '.json'));
    }

    /**
     * Crea una marca
     * @param marca Marca a crear
     */
    createMarca(marca): Observable<MarcaDetail> {
        return this.http.post<MarcaDetail>(API_URL + marcas, marca);
    }
}