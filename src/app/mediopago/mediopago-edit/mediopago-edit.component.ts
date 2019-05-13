import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mediopago } from '../mediopago';
import { MediopagoService } from '../mediopago.service';

@Component({
  selector: 'mediopago-edit',
  templateUrl: './mediopago-edit.component.html',
  styleUrls: ['./mediopago-edit.component.css']
})
export class MediopagoEditComponent implements OnInit {

  /**
   * Medio de pago que se va a actualizar
   */
  @Input() mediopago: Mediopago;

  @Output() mostrarModal = new EventEmitter();

  @Output() update = new EventEmitter();

  constructor(private mediopagoService: MediopagoService) {
    
  }

  editMediopago() {
    this.mediopagoService.updateMediopago(this.mediopago.numeroTarjeta, this.mediopago)
      .subscribe(mediopago => {
        this.update.emit(mediopago);
      });
  }

  mostrarComponente() {
    this.mostrarModal.emit();
  }

  ngOnInit() {
    this.mediopago = new Mediopago();
  }

}
