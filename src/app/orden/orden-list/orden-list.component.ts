import {Component, OnInit} from '@angular/core';
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
    ordenes: Orden[];

    /**
     * Constructor del componente
     */
    constructor(private ordenService: OrdenService, private router: Router){}

    getOrdenes(): void {
        this.ordenService.getOrdenes().subscribe(lasOrdenes  => this.ordenes = lasOrdenes);
    }

    ngOnInit(){
        this.getOrdenes();
    }

}