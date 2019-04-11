import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {Comprador} from '../comprador';
import {CompradorService} from '../comprador.service';
import { Bicicleta } from 'src/app/bicicleta/bicicleta';
// import { MedioPago } from 'src/app/MedioPago/MedioPago';

/**
 * El componente para la lista de marcas
 */
@Component({
    selector: 'app-comprador-list',
    templateUrl: './comprador-list.component.html',
    styleUrls: ['./comprador-list.component.css']
})

export class CompradorListComponent implements OnInit {


    /**
     * Lista de Compradores
     */
    bicicletas: Bicicleta[];

    /**
     * Lista Medios de Pago
     */
    // mediosPago : MedioPago[];

        /**
     * Constructor del componente
     * @param compradorService El servicio del comprador que se comunica con el API
     * @param router La ruta que ayuda a obtener los compradores a mostrar
     */
    constructor(private compradorService: CompradorService, private router: Router){}

        /**
     * Pide al servicio la lista de venta-carrito
     */
    getCarrito(): void {
        this.compradorService.getCompradorCarrito().subscribe(lasBicicletas  => this.bicicletas = lasBicicletas);
    }


    //         /**
    //  * Pide al servicio la lista de venta-mediopago
    //  */
    // getMedioPago(): void {
    //     this.compradorService.getCompradorMediosPago().subscribe(lasBicicletas  => this.bicicletas = lasBicicletas);
    // }

    /**
     * Esto inicializara el componente tomando la lista de marcas del servicio
     * Este metodo sera llamado cuando se cree el componente
     */
    ngOnInit(){
        this.getCarrito();
        // this.getMedioPago();
    }






}
