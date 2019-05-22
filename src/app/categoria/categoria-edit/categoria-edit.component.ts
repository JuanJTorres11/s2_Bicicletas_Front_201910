import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'categoria-edit',
  templateUrl: './categoria-edit.component.html',
  styleUrls: ['./categoria-edit.component.css']
})
export class CategoriaEditComponent implements OnInit {

  /**
   * Nombre de la categoria
   */
  @Input() nombre: string;

  /**
   * Categoria
   */
  categoria: Categoria;

  /**
   * Evento que notifica que se actualizó la información.
   */
  @Output() update = new EventEmitter();

  constructor(private categoriaService: CategoriaService,
              private toastrService: ToastrService) { }

  getCategoria() {
    this.categoria = new Categoria();
    this.categoriaService.getCategoriaDetail(this.nombre).subscribe(c => this.categoria = c);
  }

  editCategoria() {
    this.categoriaService.updateCategoria(this.nombre, this.categoria)
      .subscribe(c => {
        this.update.emit({nombre: c.nombre});
        this.toastrService.success("La información de la categoría fue actualizada.", "Editar Categoría");
      },
      err => {
        this.toastrService.error(err, "Error");
      })
  }

  ngOnInit() {
    this.getCategoria();
  }

}
