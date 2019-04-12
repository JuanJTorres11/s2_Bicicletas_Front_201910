import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from './categoria';
import { Bicicleta } from '../bicicleta/bicicleta';
import { CategoriaDetail } from './categoria-detail';
import { environment } from '../../environments/environment.prod';

const API_URL = environment.apiURL;
const categorias = '/categorias';
const bicicletas = '/bicicletas';

@Injectable()
export class CategoriaService {

  constructor(private http: HttpClient) { }

  /**
   * Obtiene todas las categorias.
   * @returns Lista de categorias.
   */
  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(API_URL + categorias);
  }

  /**
   * Obtiene la categoria con el nombre dado.
   * @returns Categoria con el nombre dado.
   */
  getCategoriaDetail(nombre: string): Observable<CategoriaDetail> {
    console.log(API_URL + categorias + '/' + nombre);
    return this.http.get<CategoriaDetail>(API_URL + categorias + '/' + nombre);
  }

  /**
   * Crea una nueva categoria con la información dada.
   * @param categoria Categoria a crear.
   * @returns Categoria creada.
   */
  createCategoria(categoria): Observable<Categoria> {
    return this.http.post<Categoria>(API_URL + categorias, categoria);
  }

  /**
   * Actualiza la información de la categoria.
   * @param nombre Nombre de la categoria que se va a actualizar.
   * @param categoria Categoria con la informacion actualizada.
   * @returns Categoria actualizada.
   */
  updateCategoria(nombre, categoria): Observable<CategoriaDetail> {
    return this.http.put<CategoriaDetail>(API_URL + categorias + '/' + nombre, categoria);
  }

  /**
   * Obtiene las bicicletas de la categoria con el nombre dado.
   * @param nombre Nombre de la categoria.
   * @return Lista de bicicletas de la categoria.
   */
  getCategoriaBicicletas(nombre: string): Observable<Bicicleta[]> {
    console.log(API_URL + categorias + '/' + nombre + bicicletas);
    return this.http.get<Bicicleta[]>(API_URL + categorias + '/' + nombre + bicicletas);
  }
}
