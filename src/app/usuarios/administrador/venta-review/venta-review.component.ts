import { Component, OnInit } from '@angular/core';
import { Venta } from '../../../venta/venta';
import { ActivatedRoute } from '@angular/router';
import { AdministradorService } from '../administrador.service';

@Component({
  selector: 'app-venta-review',
  templateUrl: './venta-review.component.html',
  styleUrls: ['./venta-review.component.css']
})
export class VentaReviewComponent implements OnInit {


  constructor(
    private service: AdministradorService,
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
    this.service.getVentas().subscribe(ventaBD => {
      this.ventas = ventaBD;
    })
  }

  aprobar(venta:Venta) {
    venta.aprobado = true;
    this.service.putVentas(venta);
  }

  rechazar(venta:Venta) {
    venta.aprobado = false;
    this.service.putVentas(venta);
  }

  putVenta(venta:Venta) {
    this.service.putVentas(venta).subscribe(ventaBD => {
    })
  }
  /**
   * Método que se ejecuta cuando se crea el componente.
   */
  ngOnInit() {
    this.getVentas();
  }
}