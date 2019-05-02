import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Mediopago } from '../mediopago';
import { MediopagoService } from '../mediopago.service';

@Component({
  selector: 'mediopago-list',
  templateUrl: './mediopago-list.component.html',
  styleUrls: ['./mediopago-list.component.css']
})
export class MediopagoListComponent implements OnInit {

  /**
   * Lista de medios de pago.
   */
  mediosPago: Mediopago[];

  /**
   * Medio de pago seleccionado
   */
  medioPago: Mediopago;

  /**
   * Numero del medio de pago seleccionado
   */
  numeroMediopago: number;

  /**
   * Variable que indica si se muestra la informacion de la tarjeta
   */
  mostrarInfo: boolean;

  constructor(private mediopagoService: MediopagoService,
              private location: Location
    ) { }

  /**
   * Obtiene todos los medios de pago.
   */
  getMediospago() {
    this.mediopagoService.getMediospago()
      .subscribe(mediosPago => {
        for(let mp of mediosPago) {
          var tipoTarjeta: string = mp.tipoTarjeta;

          if(tipoTarjeta === 'Debito') {
            mp.imagen = 'https://mensajerosurbanos.com/img/credit-cards/maestro.png';
          } else {
            var tipoCredito: string = mp.tipoCredito;

            if(tipoCredito === 'VISA') {
              mp.imagen = 'https://domiruth.com/vacationtravel/wp-content/uploads/2015/03/visa.png';
            } else {
              mp.imagen = 'http://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/Master-Card-Blue-icon.png';
            }
          }

          this.generarNumeroCodificado(mp);
        }

        this.mediosPago = mediosPago;
      });
  }

  /**
   * Genera el numero codificado de la tarjeta del medio de pago.
   */
  generarNumeroCodificado(mp: Mediopago): number {
    var numeroTarjeta: string = String(mp.numeroTarjeta).trim();
    mp.numeroCodificado = +numeroTarjeta.substring(numeroTarjeta.length - 4, numeroTarjeta.length);
    return mp.numeroCodificado;
  }

  /**
   * Metodo que se activa cuando un elemento es seleccionado.
   * @param numeroTarjeta Numero de la tarjeta seleccionado.
   */
  onSelected(numeroTarjeta: number) {
    this.numeroMediopago = numeroTarjeta;
    this.medioPago = new Mediopago();
    this.mediopagoService.getMediopago(numeroTarjeta)
      .subscribe(mp => {
        this.medioPago = mp;
        this.generarNumeroCodificado(this.medioPago);
      });
  }

  mostrarModal(numeroTarjeta: number) {
    this.mostrarInfo = false;
    this.onSelected(numeroTarjeta);
  }

  recibirEvento() {
    this.ngOnInit();
  }

  mostrarInfoMediopago(numeroTarjeta: number) {
    this.onSelected(numeroTarjeta);
    this.mostrarInfo = true;
  }

  back() {
    this.location.back();
  }

  ngOnInit() {
    this.mediosPago = [];
    this.getMediospago();
    this.mostrarInfo = false;
  }

}