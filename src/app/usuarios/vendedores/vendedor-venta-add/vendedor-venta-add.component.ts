import { Component, OnInit } from '@angular/core';
import { VendedorService } from '../vendedor.service';
import { Venta } from '../../../Venta/venta';
import { FormGroup, FormsModule, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-vendedor-venta-add',
  templateUrl: './vendedor-venta-add.component.html',
  styleUrls: ['./vendedor-venta-add.component.css']
})
export class VendedorVentaAddComponent implements OnInit {

  constructor(
    private service: VendedorService) { }

    form: FormGroup;
    
  /**
   * Identificador del vendedor actual
   */
  id:number;

  /**
   * Representación del objeto venta
   */
  venta:Venta;
  
  foto= "https://yerkabikes.com/cl/wp-content/uploads/2015/12/Yerka-v2-turquesa-turquoise.png";

  /**
   * Crea una nueva venta.
   */
  addVenta () {
    this.venta.fotos[0] = this.foto;
    this.service.postVendedorVentas(this.id, this.venta).subscribe(ventaBD => {
      this.venta = ventaBD;
    });
  }

  /**
   * Método que se ejecuta cuando se crea el componente.
   */
  ngOnInit() {
    this.id = parseInt(localStorage.getItem('id'));
  }
}