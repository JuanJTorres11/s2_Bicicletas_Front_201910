import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {Marca} from '../marca';
import {MarcaService} from '../marca.service';
import { MarcaDetail } from '../marca-detail';

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
     * Shows or hides the detail of an author
     */
    showView: boolean;

    /**
    * Shows or hides the edition of an author
    */
    showEdit: boolean;

    /**
     * the author that the user views.
     */
    selectedMarca: Marca;

    /**
   * El id de la marca.
   */
     marca_id: number;

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

    getMarcaDetail(): void {
        this.marcaService.getMarcaDetail(this.marca_id)
            .subscribe(selectedMarca => {
                this.selectedMarca = selectedMarca
            });
    }

    /**
    * Shows or hides the create component
    */
   showHideEdit(marca_id: number): void {
    if (!this.showEdit || (this.showEdit && marca_id != this.selectedMarca.id)) {
        this.showView = false;
        this.showEdit = true;
        this.marca_id = marca_id;
        this.selectedMarca = new MarcaDetail();
        this.getMarcaDetail();
    }
    else {
        this.showEdit = false;
        this.showView = true;
    }

    
}

}