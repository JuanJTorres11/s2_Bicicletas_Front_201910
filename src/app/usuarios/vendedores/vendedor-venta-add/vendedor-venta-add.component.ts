import { Component, OnInit } from '@angular/core';
import { VendedorService } from '../vendedor.service';

@Component({
  selector: 'app-vendedor-venta-add',
  templateUrl: './vendedor-venta-add.component.html',
  styleUrls: ['./vendedor-venta-add.component.css']
})
export class VendedorVentaAddComponent implements OnInit {

  constructor(
    private service: VendedorService) { }

  /**
   * Identificador del vendedor actual
   */
  id:number;

  /**
   * Representación del objeto venta
   */
  venta:any;
  
  album:string [] = ["prueba1"];

  addVenta () {
    this.service.postVendedorVentas(this.id, this.venta).subscribe(ventaBD => {

    });
  }
  ngOnInit() {
    this.id = parseInt(localStorage.getItem('id'));
  }

}
