import { Component, OnInit } from '@angular/core';
import { Venta } from '../../../Venta/venta';
import { VendedorService } from '../vendedor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendedor-venta-list',
  templateUrl: './vendedor-venta-list.component.html',
  styleUrls: ['./vendedor-venta-list.component.css']
})
export class VendedorVentaListComponent implements OnInit {

  constructor(
    private vendedorService: VendedorService,
    private route: ActivatedRoute) { }

  /**
   * Ventas del vendedor.
   */
  ventas: Venta[];

  /**
   * Identificador del vendedor actual.
   */
  id: number;

  /**
   * Obtiene las ventas asociadas al vendedor del back.
   */
  getVentas() {
    this.vendedorService.getVendedorVentas(this.id).subscribe(ventaBD => {
      this.ventas = ventaBD;
    })
  }

  /**
   * Método que se ejecuta cuando se crea el componente.
   */
  ngOnInit() {
    this.id = parseInt(localStorage.getItem('id'));
    this.getVentas();
  }
}