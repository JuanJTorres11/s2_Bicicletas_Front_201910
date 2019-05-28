import { Component, OnInit } from '@angular/core';
import { CompradorService } from '../comprador.service';
import { Router } from '@angular/router';
import { Mediopago } from '../../../mediopago/mediopago';

@Component({
    selector: 'app-comprador-mediospago',
    templateUrl: './comprador-mediospago.component.html',
    styleUrls: ['./comprador-mediospago.component.css']
  })

  export class CompradorMediospagoComponent implements OnInit {

    constructor(
      private service: CompradorService,
      private router: Router) { }

      id: number;

      mediosPago: Mediopago[];

  /**
   * Medios de pago de Comprador
   */
  // getMediosPago() {
  //   this.service.getCompradorMediosPago(this.id).subscribe(mediosPagoBD => {
  //     this.mediosPago = mediosPagoBD;
  //   });
  // }


    /**
   * Componente MedioPago
   */
  redirectMedioPago() {
    this.router.navigateByUrl('comprador/' + this.id + 'mediosPago/');
  }



    /**
   * Método que se ejecuta apenas se crea el componente
   */
  ngOnInit() {
    this.id = parseInt(localStorage.getItem('id'));
    //this.getMediosPago();
  }
  }