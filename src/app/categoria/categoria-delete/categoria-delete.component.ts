import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

  /**
   * Nombre de la categoria que se va a eliminar
   */
  @Input() nombre: String;

  @Output() eliminado = new EventEmitter;

  constructor(private categoriaService: CategoriaService,
              private toastr: ToastrService
    ) { }

  deleteCategoria() {
    this.categoriaService.deleteCategoria(this.nombre)
      .subscribe(categoria => {
        this.eliminado.emit();
        this.toastr.error("Se eliminó la categoria " + this.nombre + ".");
      });
  }

  ngOnInit() {
  }

}
