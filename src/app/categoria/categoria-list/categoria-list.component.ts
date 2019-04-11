import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output() detail = new EventEmitter<string>();

  /**
   * Constructor del componente
   * @param categorias Lista de categorias.
   */
  constructor(private categoriaService: CategoriaService, private router: Router) {
    this.categorias = [];
    this.agregarCategoria = false;
  }

  /**
   * Cambia el estado de la variable de agregarCategoria a
   * true para mostrar el componente.
   */
  mostrarComponenteAgregarCategoria() {
    this.agregarCategoria = true;
  }

  /**
   * Recibe el evento de cancelar del componente de agregar.
   */
  recibirEventoCancelar() {
    this.agregarCategoria = false;
  }

  /**
   * Recibe el evento de crear del componente de agregar.
   */
  recibirEventoCrear() {
    this.getCategorias();
  }

  /**
   * Envia el evento para mostrar el detail de la categoria.
   */
  enviarEventoDetail(nombre: string) {
    this.detail.emit(nombre);
  }

  /**
   * Metodo que se activa cuando un elemento es seleccionado.
   * @param nombre Nombre de la categoria elegida.
   */
  onSelected(nombre: string) {
    this.nombreCategoria = nombre;
    this.categoria = new Categoria();
    this.categoriaService.getCategoriaDetail(nombre).subscribe(c => this.categoria = c);
    this.enviarEventoDetail(nombre);
  }

  /**
   * Obtiene todas las categorias.
   */
  getCategorias() {
    this.categoriaService.getCategorias()
      .subscribe(categorias => this.categorias = categorias);
  }

  /**
   * Metodo que se activa cuando se inicializa el componente.
   */
  ngOnInit() {
    this.getCategorias();

  }
}