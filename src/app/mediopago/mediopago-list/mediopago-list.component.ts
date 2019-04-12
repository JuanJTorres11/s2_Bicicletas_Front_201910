import { Component, OnInit } from '@angular/core';
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

  constructor(private mediopagoService: MediopagoService) { }

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
              mp.imagen = 'https://cdn.icon-icons.com/icons2/1186/PNG/512/1490135018-mastercard_82253.png';
            }
          }

          var numeroTarjeta: string = String(mp.numeroTarjeta);
          mp.numeroCodificado = +numeroTarjeta.substring(numeroTarjeta.length - 4, numeroTarjeta.length);
        }

        this.mediosPago = mediosPago;
      });
  }

  ngOnInit() {
    this.mediosPago = [];
    this.getMediospago();
  }

}