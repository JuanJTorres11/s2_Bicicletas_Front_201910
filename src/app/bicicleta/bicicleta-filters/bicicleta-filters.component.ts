import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

import {BicicletaService} from '../bicicleta.service';
import {Bicicleta} from '../bicicleta';

import {MarcaService} from '../../marca/marca.service'; 
import {CategoriaService} from '../../categoria/categoria.service'; 

import {Categoria} from '../../categoria/categoria';
import {Marca} from '../../marca/marca'; 


declare var $: any; 

@Component({
  selector: 'app-bicicleta-filters',
  templateUrl: './bicicleta-filters.component.html',
  styleUrls: ['./bicicleta-filters.component.css']
})
export class BicicletaFiltersComponent implements OnInit {

  constructor(
       private bicicletaService: BicicletaService,
        private marcaService: MarcaService,
        private categoriaService: CategoriaService,
        private toastrService: ToastrService,
        private router: Router
  
  ) { }

  /**
    * La lista de todas las categorias
    */
    categorias: Categoria[];

   /**
    * La lista de todas las marcas
    */
    marcas: Marca[];
	 
  	/**
    * Retorna la lista de todas las marcas
    */
    getMarcas(): void {
        this.marcaService.getMarcas()
            .subscribe(marcas => {
                this.marcas = marcas;
            }, err => {
                this.toastrService.error(err, 'Error');
            });
    }

	/**
    * Retorna la lista de todas las categorias
    */
    getCategorias(): void {
        this.categoriaService.getCategorias()
            .subscribe(categorias => {
                this.categorias = categorias;
            }, err => {
                this.toastrService.error(err, 'Error');
            });
    }

	 /**
    * Funcion que incializa el componente
    */
    ngOnInit() {
		this.getCategorias();
		this.getMarcas();
     }

}

function SidebarCollapse () {
    $('.menu-collapsed').toggleClass('d-none');
    $('.sidebar-submenu').toggleClass('d-none');
    $('.submenu-icon').toggleClass('d-none');
    $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');
    
    // Treating d-flex/d-none on separators with title
    var SeparatorTitle = $('.sidebar-separator-title');
    if ( SeparatorTitle.hasClass('d-flex') ) {
        SeparatorTitle.removeClass('d-flex');
    } else {
        SeparatorTitle.addClass('d-flex');
    }
    
    // Collapse/Expand icon
    $('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right');
	
	}


