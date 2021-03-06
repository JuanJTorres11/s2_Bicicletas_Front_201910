import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Mediopago } from '../mediopago';
import { MediopagoService } from '../mediopago.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'mediopago-add',
  templateUrl: './mediopago-add.component.html',
  styleUrls: ['./mediopago-add.component.css']
})
export class MediopagoAddComponent implements OnInit {

  Debito = "Debito";
  Credito = "Credito";
  VISA = "VISA";
  MASTERCARD = "MASTERCARD";

  /**
   * Medio de pago creado.
   */
  mediopago: Mediopago;

  @Output() create = new EventEmitter();

  constructor(private mediopagoService: MediopagoService,
              private toastrService: ToastrService) { }

  createMediopago() {
    this.mediopagoService.createMediopago(this.mediopago)
      .subscribe(mediopago => {
        this.create.emit();
        let tipoCredito = this.mediopago.tipoCredito ? " " + this.mediopago.tipoCredito : "";
        let mensaje = "Se creó la tarjeta " + this.mediopago.tipoTarjeta + tipoCredito + ".";
        this.toastrService.success(mensaje, "Creación Medio Pago");
      }, err => {
        this.toastrService.error(err, "Error");
      });
  }

  cambiarTipo(tipo: String) {
    if(tipo === this.Debito) {
      this.mediopago.tipoTarjeta = this.Debito;
      this.mediopago.tipoCredito = null;
    } else {
      this.mediopago.tipoTarjeta = this.Credito;

      if(tipo === this.VISA) {
        this.mediopago.tipoCredito = this.VISA;
      } else {
        this.mediopago.tipoCredito = this.MASTERCARD;
      }
    }

    console.log(this.mediopago.tipoTarjeta);
    console.log(this.mediopago.tipoCredito);
  }

  ngOnInit() {
    this.mediopago = new Mediopago();
  }

}
