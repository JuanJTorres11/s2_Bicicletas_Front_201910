import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {Marca} from '../marca';
import {MarcaService} from '../marca.service';

/**
 * El componente para la lista de marcas
 */
@Component({
    selector: 'app-marca-list',
    templateUrl: './marca-list.component.html',
    styleUrls: ['./marca-list.component.css']
})
export class MarcaListComponent implements OnInit {

    /**
     * Lista de marcas
     */
    marcas: Marca[];

    /**
     * Constructor del componente
     * @param marcaService El servicio de la marca que se comunica con el API
     * @param router La ruta que ayuda a obtener las marcas a mostrar
     */
    constructor(private marcaService: MarcaService, private router: Router){}

    /**
     * Pide al servicio la lista de marcas
     */
    getMarcas(): void {
        this.marcaService.getMarcas().subscribe(lasMarcas  => this.marcas = lasMarcas);
    }

    /**
     * Esto inicializara el componente tomando la lista de marcas del servicio
     * Este metodo sera llamado cuando se cree el componente
     */
    ngOnInit(){
        this.getMarcas();
    }

}