import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';
import { CategoriaDetail } from '../categoria-detail';

@Component({
  selector: 'categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {

  /**
   * Lista de categorias
   */
  categorias: Categoria[];

  /**
   * Variable que indica si se quiere agregar una Categoria
   */
  agregarCategoria: boolean;

  /**
   * Nombre de la categoria seleccionada.
   */
  nombreCategoria: string;

  /**
   * Categoria seleccionada.
   */
  categoria: Categoria;

  /**
   * Constructor del componente
   * @param categorias Lista de categorias.
   */
  constructor(private categoriaService: CategoriaService, private router: Router) {
    this.categorias = [];
    this.agregarCategoria = false;
  }

  mostrarComponenteAgregarCategoria() {
    this.agregarCategoria = true;
  }

  recibirEventoCancelar() {
    this.agregarCategoria = false;
  }

  recibirEventoCrear() {
    this.getCategorias();
  }

  onSelected(nombre: string) {
    console.log(nombre);
    this.nombreCategoria = nombre;
    this.categoria = new Categoria();
    this.categoriaService.getCategoriaDetail(this.nombreCategoria).subscribe(c => this.categoria = c);
    this.router.navigate(['/categorias/' + nombre]);
  }

  getCategorias() {
    this.categoriaService.getCategorias()
      .subscribe(categorias => this.categorias = categorias);
  }

  ngOnInit() {
    this.getCategorias();
  }
}