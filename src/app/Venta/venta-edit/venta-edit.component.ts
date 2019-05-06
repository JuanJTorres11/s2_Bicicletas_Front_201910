

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {VentaService} from '../venta.service';
import { ToastrService } from 'ngx-toastr';
import {Router, ActivatedRoute} from '@angular/router';
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
    private router : Router, 
    private route: ActivatedRoute
  ) { }

  /**
     * Comprador que se mostrará
     */
  venta: Venta;
  
  facturaVieja: String;
  facturaNueva: String;
  precioViejo: number;
  precioNuevo: number;
  fotosViejas: String[];
  fotosNuevas: String[];

  /**
* Identificador que llega en la ruta
*/
  id: number;
//  /**
//   * Emisor de eventos para la cancelacion de una edicion
//   */
//  @Output() cancel = new EventEmitter();
//
//  /**
//   * Emisor de eventos para una edicion
//   */
//  @Output() update = new EventEmitter();
  
  cambiarFactura()
  {
      if (this.facturaVieja != this.venta.factura)
      {
          this.toastrService.error("La ruta de la factura no coincide.")
      }
      else 
      {
          this.venta.factura = this.facturaNueva;
      }
  }
  
  cambiarPrecio()
  {
      if (this.precioViejo != this.venta.precio)
      {
          this.toastrService.error("El precio no coincide con el actual.");
      }
      else {
          this.venta.precio = this.precioNuevo;
      }
  }

  /**
  * Pide al servicio actualizar la Venta
  */
   updateVenta(): void {
     this.service.putVenta(this.id, this.venta).subscribe((venta) => {
      this.venta = venta
    })};
    
    getVentaInfo() : void
    {
        this.service.getVenta(this.id).subscribe((venta) => {this.venta = venta})
    };
    


//  /**
//   * Cancela la edicion de la venta
//   */
//  cancelCreation(): void {
//    this.cancel.emit();
//}
  ngOnInit() {
      
          this.id = +this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.venta = new Venta();
        this.getVentaInfo();
    }
  }


}
