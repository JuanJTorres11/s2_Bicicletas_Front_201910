import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import{MarcaService} from '../marca.service';
import { ToastrService } from 'ngx-toastr';
import{Marca} from '../marca';

@Component({
  selector: 'app-marca-create',
  templateUrl: './marca-create.component.html',
  styleUrls: ['./marca-create.component.css']
})
export class MarcaCreateComponent implements OnInit {

  constructor(
    private marcaService: MarcaService,
    private toastrService: ToastrService
  ) { }

  /**
   * La nueva marca
   */
  marca: Marca

  /**
   * Emisor de eventos para la cancelacion de una creacion
   */
  @Output() cancel = new EventEmitter();

  /**
   * Emisor de eventos para una creacion
   */
  @Output() create = new EventEmitter();

  /**
   * Pide al servicio crear la marca
   */
  createMarca(): Marca {
    this.marcaService.createMarca(this.marca)
    .subscribe((marca) => {
        this.marca = marca;
        this.create.emit();
        this.toastrService.success("La marca fue creada", "Creacion de marca");     
    });
    return this.marca;
  }

  /**
   * Cancela la creacion de la marca
   */
  cancelCreation(): void {
    this.cancel.emit();
}

/**
 * Esto inicializara el componente
 * Este metodo sera llamado cuando se cree el componente
 */
  ngOnInit() {
    this.marca=new Marca();
  }

}
