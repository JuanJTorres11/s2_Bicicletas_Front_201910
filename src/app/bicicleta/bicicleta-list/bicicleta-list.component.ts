import {Component, EventEmitter, OnInit, Input, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

import {Bicicleta} from '../bicicleta';
import {BicicletaService} from '../bicicleta.service';

import {MarcaService} from '../../marca/marca.service'; 
import {CategoriaService} from '../../categoria/categoria.service'; 

import {Categoria} from '../../categoria/categoria';
import {Marca} from '../../marca/marca'; 

import {ListFilterUsadaPipe} from '../../share-module/list-filter-usada.pipe'; 
import {ListFilterReferPipe} from '../../share-module/list-filter-refer.pipe'; 
import {ListFilterPrecioPipe} from '../../share-module/list-filter-precio.pipe'; 
import {ListFilterDesPipe} from '../../share-module/list-filter-des.pipe'; 




declare var $: any; 

/**
 * El componente para la lista de Bicicletas de la tienda
 */
@Component({
    selector: 'app-bicicleta',
    templateUrl: './bicicleta-list.component.html',
    styleUrls: ['./bicicleta-list.component.css'],
	providers : [ListFilterUsadaPipe,
				ListFilterReferPipe,
				ListFilterPrecioPipe,
				ListFilterDesPipe
				]
})
export class BicicletaListComponent implements OnInit {

    /**
     * Constructor del componente
     * @param bicicletaService El proveedor de servicio de la Bicicleta 
     */
    constructor(
	private bicicletaService: BicicletaService,
	private route: ActivatedRoute,
	private marcaService: MarcaService,
    private categoriaService: CategoriaService,
    private toastrService: ToastrService,
    private router: Router,


	private pipeUsada: ListFilterUsadaPipe, 
	private pipeReferencia: ListFilterReferPipe, 
	private pipePrecio: ListFilterPrecioPipe,
	private pipeDes: ListFilterDesPipe

	) {}

	searchModel: string;


    /**
     * La lista de Bicicletas que se desean mostrar
     */
      @Input() bicicletas: Bicicleta[];


    /**
     * Metodo que retorna todas las bicicletas de la tienda para mostrarlos en la lista
     */
    getBicicletas(): void {
        this.bicicletaService.getBicicletas()
            .subscribe(bicicletas => this.bicicletas = bicicletas);
    }


	/**
    * La lista de todas las categorias
    */
    categorias: Categoria[];

   /**
    * La lista de todas las marcas
    */
    marcas: Marca[];


	categoria:String
	 
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
     * Metodo que incializa el componente
     */
    ngOnInit() {
		console.log("IntitBicicletas");
		if(this.bicicletas === undefined){
		 this.getBicicletas();
		}

		this.getCategorias();
		this.getMarcas();

		this.searchModel = "";
 	}

	filtrarUsada(value){
		this.bicicletas = this.pipeUsada.transform(this.bicicletas, value);
	}

	filtrarPrecio(value, value2){
		this.bicicletas = this.pipePrecio.transform(this.bicicletas, value, value2);
	}

	filtrarReferencia(value){
			this.bicicletas = this.pipeReferencia.transform(this.bicicletas, value);
	}

	sortAlphAsc() {
	this.bicicletas.sort((t1, t2) => {
      const name1 = t1.referencia.toLowerCase();
      const name2 = t2.referencia.toLowerCase();
      if (name1 > name2) { return 1; }
      if (name1 < name2) { return -1; }
	  console.log("ordenam");
      return 0;
    });
	}

	sortAlphDesc() {
	this.bicicletas.sort((t1, t2) => {
      const name1 = t1.referencia.toLowerCase();
      const name2 = t2.referencia.toLowerCase();
      if (name1 > name2) { return -1; }
      if (name1 < name2) { return 1; }
      return 0;
    });
	}

	sortPrecioAsc() {
	this.bicicletas.sort((t1, t2) => {
      const name1 = t1.precio;
      const name2 = t2.precio;
      if (name1 > name2) { return 1; }
      if (name1 < name2) { return -1; }
      return 0;
    });
	}

	sortPrecioDesc() {
	this.bicicletas.sort((t1, t2) => {
      const name1 = t1.precio;
      const name2 = t2.precio;
      if (name1 > name2) { return -1; }
      if (name1 < name2) { return 1; }
      return 0;
    });
	}
	
	sortCalificacionDesc() {
		this.bicicletas.sort((t1, t2) => {
		  const name1 = t1.calificacion;
		  const name2 = t2.calificacion;
		  if (name1 > name2) { return -1; }
		  if (name1 < name2) { return 1; }
		  return 0;
		});
	}

	toggleEstado(value, criterio)  { 
	
	  var  checkBox = document.getElementById(value) as HTMLInputElement;
	  //console.log( checkBox.checked );
	  if (checkBox.checked == true){
		this.filtrarUsada(criterio);
	  } 
	  else {
		this.getBicicletas(); 
	  }
  }


  togglePrecio(value, criterio1, criterio2)  { 
	
	  var  checkBox = document.getElementById(value) as HTMLInputElement;
	  //console.log( checkBox.checked );
	  if (checkBox.checked == true){
		this.filtrarPrecio(criterio1, criterio2);
	  } 
	  else {
		this.getBicicletas(); 
	  }
  }

  /**
   * Obtiene las bicicletas de la categoria con el nombre dado.
   * @param nombreCategoria Nombre de la categoria.
   */
  getBicicletasCategoria(nombreCategoria: string) {
    this.categoriaService.getCategoriaBicicletas(nombreCategoria)
      .subscribe(bicis => {
        this.bicicletas = bicis;
        console.log(bicis);
      });
  }

  /**
   * Obtiene las bicicletas de la marca con el nombre dado.
   * @param nombreMarca Nombre de la marca.
   */
  getBicicletasMarca(idMarca: number) {
    this.marcaService.getMarcaBicicletas(idMarca)
      .subscribe(b => {
        this.bicicletas = b;
      });
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


	
  