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
     */
    constructor(private marcaService: MarcaService, private router: Router){}

    getMarcas(): void {
        this.marcaService.getMarcas().subscribe(lasMarcas  => this.marcas = lasMarcas);
    }

    ngOnInit(){
        this.getMarcas();
    }

}