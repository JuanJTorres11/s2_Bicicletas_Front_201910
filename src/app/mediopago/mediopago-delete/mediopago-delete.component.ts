import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mediopago } from '../mediopago';
import { MediopagoService } from '../mediopago.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'mediopago-delete',
  templateUrl: './mediopago-delete.component.html',
  styleUrls: ['./mediopago-delete.component.css']
})
export class MediopagoDeleteComponent implements OnInit {

  @Input() mediopago: Mediopago;
  @Output() delete = new EventEmitter();
  @Output() mostrarModal = new EventEmitter();

  constructor(private mediopagoService: MediopagoService,
              private toastrService: ToastrService) { }

  deleteMediopago() {
    var numero = 0;
    numero = this.mediopago.numeroCodificado;
    this.mediopagoService.deleteMediopago(this.mediopago.numeroTarjeta)
      .subscribe(mediopago => {
        this.delete.emit();
        this.toastrService.error("Se eliminó la tarjeta terminada en " + numero + ".", "Eliminado medio de pago");
      });
  }

  mostrarComponente() {
    this.mostrarModal.emit();
  }

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
    this.mediopago = new Mediopago();
  }

}
