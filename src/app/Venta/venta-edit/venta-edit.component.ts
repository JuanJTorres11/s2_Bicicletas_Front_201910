

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {VentaService} from '../venta.service';
import { ToastrService } from 'ngx-toastr';
import {Venta} from '../venta';


@Component({
  selector: 'app-venta-edit',
  templateUrl: './venta-edit.component.html',
//  styleUrls: ['./venta-edit.component.css']
})
export class VentaEditComponent implements OnInit {

  constructor(
    private service: VentaService,
    private toastrService: ToastrService,
  ) { }

  /**
     * Comprador que se mostrará
     */
  venta: Venta;

  /**
* Identificador que llega en la ruta
*/
  id: number;
  /**
   * Emisor de eventos para la cancelacion de una edicion
   */
  @Output() cancel = new EventEmitter();

  /**
   * Emisor de eventos para una edicion
   */
  @Output() update = new EventEmitter();

  /**
  * Pide al servicio actualizar la Venta
  */
   updateVenta(): void {
     this.service.putVenta(this.id, this.venta).subscribe((venta) => {
      this.venta = venta
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
