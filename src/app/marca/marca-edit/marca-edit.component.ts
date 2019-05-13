import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MarcaService} from '../marca.service';
import { ToastrService } from 'ngx-toastr';
import { MarcaDetail } from '../marca-detail';


@Component({
  selector: 'app-marca-edit',
  templateUrl: './marca-edit.component.html',
  styleUrls: ['./marca-edit.component.css']
})
export class MarcaEditComponent implements OnInit {

  constructor(
    private marcaService: MarcaService,
    private toastrService: ToastrService,
  ) { }

  /**
   * El detalle de la marca a editar
   */
  @Input() marca: MarcaDetail;

  /**
   * Emisor de eventos para la cancelacion de una edicion
   */
  @Output() cancel = new EventEmitter();

  /**
   * Emisor de eventos para una edicion
   */
  @Output() update = new EventEmitter();

  /**
  * Pide al servicio actualizar la marca
  */
   updateMarca(): void {
    
    this.marcaService.updateMarca(this.marca)
            .subscribe(() => {
                this.toastrService.success("La marca se actualizo", "Edicion de la marca");
            });
}

  /**
   * Cancela la edicion de la marca
   */
  cancelCreation(): void {
    this.cancel.emit();
}
  ngOnInit() {
}
}
