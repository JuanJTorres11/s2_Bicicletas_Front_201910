import {Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import {Orden} from '../orden';
import {OrdenService} from '../orden.service';

/**
 * El componente para la lista de ordenes
 */
@Component({
    selector: 'app-orden-list',
    templateUrl: './orden-list.component.html',
    styleUrls: ['./orden-list.component.css']
})
export class OrdenListComponent implements OnInit {

    /**
     * Lista de ordenes
     */
    @Input() ordenes: Orden[];

    /**
   * Constructor del componente
   * @param ordenService El servicio de la orden que se comunica con el API
   * @param route La ruta que ayuda a obtener las ordenes a mostrar
   */
    constructor(private ordenService: OrdenService, private router: Router){}

    /**
     * Pide al servicio la lista de ordenes
     */
    getOrdenes(): void {
        this.ordenService.getOrdenes().subscribe(lasOrdenes  => this.ordenes = lasOrdenes);
    }

    /**
     * Esto inicializara el componente tomando la lista de ordenes del servicio
     * Este metodo sera llamado cuando se cree el componente
     */
    ngOnInit(){
        this.getOrdenes();
    }

}