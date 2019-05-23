import { Component, OnInit, Input } from '@angular/core';
import { CompradorService } from '../comprador.service';
import { Router } from '@angular/router';
import { Orden } from '../../../orden/orden';

@Component({
    selector: 'app-comprador-orden',
    templateUrl: './comprador-orden.component.html',
    styleUrls: ['./comprador-orden.component.css']
  })

  export class CompradorOrdenComponent implements OnInit {

    constructor(private service: CompradorService) { }

  @Input()  id: number;

   ordenesComprador: Orden[];

   /**
   * Obtiene las ordenes del comprador. 
   */
  getOrdenes(idComprador : number) {
    this.service.getCompradorOrden(idComprador).subscribe(ordenesCompradorBD => {
      this.ordenesComprador = ordenesCompradorBD;
    });
  }

  getCompradorOrden() {
    this.getOrdenes(this.id);
  }

    /**
   * Método que se ejecuta apenas se crea el componente
   */
  ngOnInit() {
    if(this.ordenesComprador === undefined) {
      this.ordenesComprador = [];
    }
    this.getCompradorOrden();
  }

  }