import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Categoria } from '../categoria';
import { ToastrService } from 'ngx-toastr';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'categoria-add',
  templateUrl: './categoria-add.component.html',
  styleUrls: ['./categoria-add.component.css']
})
export class CategoriaAddComponent implements OnInit {

  @Output() cancelar = new EventEmitter();
  @Output() crear = new EventEmitter();
  categoria: Categoria;

  constructor(private categoriaService: CategoriaService,
              private toastrService: ToastrService
  ) { }

  cancelarCreacion() {
    this.cancelar.emit();
  }

  crearCategoria() {
    this.categoriaService.createCategoria(this.categoria).subscribe(categoria => {
      this.categoria = categoria;
      this.crear.emit();
      this.toastrService.success("Se creó la categoría " + this.categoria, "Creación Categoría");
    }, err => {
      this.toastrService.error(err, "Error");
    });

    return this.categoria;
  }

  ngOnInit() {
    this.categoria = new Categoria();
  }
}