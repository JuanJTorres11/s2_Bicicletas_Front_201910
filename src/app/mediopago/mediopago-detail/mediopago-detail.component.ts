import { Component, OnInit, Input } from '@angular/core';

import { Mediopago } from '../mediopago';
import { MediopagoService } from '../mediopago.service';

@Component({
  selector: 'mediopago-detail',
  templateUrl: './mediopago-detail.component.html',
  styleUrls: ['./mediopago-detail.component.css']
})
export class MediopagoDetailComponent implements OnInit {

  /**
   * Medio de pago que se esta mostrando
   */
  @Input() mediopago: Mediopago;

  constructor(private mediopagoService: MediopagoService) { }

  /**
   * Retorna el tipo de tarjeta
   */
  getTipo(): string {
    var tipoTarjeta = this.mediopago.tipoTarjeta;
    var tipo: string = tipoTarjeta;

    if(tipoTarjeta === 'Credito') {
      tipo = this.mediopago.tipoCredito
    }

    return tipo;
  }

  ngOnInit() {
  }
}