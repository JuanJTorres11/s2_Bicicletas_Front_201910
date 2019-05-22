import { Component, OnInit } from '@angular/core';
import { CompradorService } from '../comprador.service';
import { Router } from '@angular/router';
import { Orden } from '../../../Orden/orden';

@Component({
    selector: 'app-comprador-orden',
    templateUrl: './comprador-orden.component.html',
    styleUrls: ['./comprador-orden.component.css']
  })

  export class CompradorOrdenComponent implements OnInit {

    constructor(
        private service: CompradorService,
        private router: Router) { }

        id: number;

        ordenesComprador: Orden[];

   /**
   * Obtiene las ordenes del comprador. 
   */
  getOrdenes() {
    this.service.getCompradorOrden(this.id).subscribe(ordenesCompradorBD => {
      this.ordenesComprador = ordenesCompradorBD;
    });
  }

    
  /**
   * Redirige al componente de orden.
   */
  redirectOrden() {
    this.router.navigateByUrl('compradores/' + this.id + '/ordenes');
  }


    /**
   * Método que se ejecuta apenas se crea el componente
   */
  ngOnInit() {
    this.id = parseInt(localStorage.getItem('id'));
    this.getOrdenes();
  }

  }