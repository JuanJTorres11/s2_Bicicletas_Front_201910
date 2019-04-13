import { Component, OnInit } from '@angular/core';
import { VendedorService } from '../vendedor.service';
import { Router } from '@angular/router';
import { Mediopago } from '../../../mediopago/mediopago';

@Component({
  selector: 'app-vendedor-mediospago',
  templateUrl: './vendedor-mediospago.component.html',
  styleUrls: ['./vendedor-mediospago.component.css']
})
export class VendedorMediospagoComponent implements OnInit {

  constructor(
    private service: VendedorService,
    private router: Router) { }

  id: number;

  mediosPago: Mediopago [];

  /**
   * Obtiene los médios de pago asociados a este vendedor
   */
  getMediosPago() {
    this.service.getVendedorMediosPago(this.id).subscribe(mediosPagoBD => {
      this.mediosPago = mediosPagoBD;
    });
  }
  
  /**
   * Redirige al componente de Medios de Pago.
   */
  redirectMedioPago() {
    this.router.navigateByUrl('vendedores/' + this.id + 'mediosPago/');
  }

  /**
   * Genera el numero codificado de la tarjeta del medio de pago.
   */
  generarNumeroCodificado(mp: Mediopago): number {
    var numeroTarjeta: string = String(mp.numeroTarjeta);
    mp.numeroCodificado = +numeroTarjeta.substring(numeroTarjeta.length - 4, numeroTarjeta.length);
    return mp.numeroCodificado;
  }

  /**
   * Método que se ejecuta apenas se crea el componente
   */
  ngOnInit() {
    this.id = parseInt(localStorage.getItem('id'));
    this.getMediosPago();
  }
}