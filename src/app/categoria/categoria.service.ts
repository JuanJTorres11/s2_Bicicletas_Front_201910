import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from './categoria';
import { CategoriaDetail } from './categoria-detail';
import { environment } from '../../environments/environment.prod';

const API_URL = environment.apiURL;
const categorias = '/categorias';

@Injectable()
export class CategoriaService {

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(API_URL + categorias);
  }

  getCategoriaDetail(nombre: string): Observable<CategoriaDetail> {
    return this.http.get<CategoriaDetail>(API_URL + categorias + '/' + nombre);
  }

  createCategoria(categoria): Observable<Categoria> {
    return this.http.post<Categoria>(API_URL + categorias, categoria);
  }
}