import {Component, OnInit, ViewChild, EventEmitter, Output, Input} from '@angular/core';
import {DatePipe} from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

import {BicicletaService} from '../bicicleta.service';
import {Bicicleta} from '../bicicleta';
import {BicicletaDetail} from '../bicicleta-detail';

import {MarcaService} from '../../marca/marca.service'; 
import {CategoriaService} from '../../categoria/categoria.service'; 


import {Categoria} from '../../categoria/categoria';
import {Marca} from '../../marca/marca'; 



@Component({
    selector: 'app-bicicleta-edit',
    templateUrl: './bicicleta-edit.component.html',
    styleUrls: ['./bicicleta-edit.component.css'],
	providers: [DatePipe]

})
export class BicicletaEditComponent implements OnInit {

    /**
    * El constructor del componente
    * @param bicicletaService El servicio de la Bicicleta que se comunica con el API
    * @param toastrService toastr: sirve para mostrar los mensajes al usuario
    * @param router El router que indica cuando se necita actualizar el Componente
    * @param route  Route que recupera el id de la bicicleta que se desea mostrar
    */
    constructor(
        
        private bicicletaService: BicicletaService,
        private toastrService: ToastrService,
        private router: Router,
        private route: ActivatedRoute,
		private marcaService: MarcaService,
        private categoriaService: CategoriaService,
		private dp: DatePipe,

    ) {}

    model: any;

	 /**
   * Emisor de eventos para la cancelacion de una creacion
   */
  @Output() cancel = new EventEmitter();

  /**
   * Emisor de eventos para una creacion
   */
  @Output() create = new EventEmitter();
   
  
    bicicleta_id: number;
   
   /**
    * La nueva Bicicleta
    */
    bicicleta: BicicletaDetail;

	/**
    * La categoria de l Bicicleta
    */
    categoriaB: Categoria;

   /**
    * La marca de l Bicicleta
    */
    marcaB: Marca;


	/**
    * La lista de todas las categorias
    */
    categorias: Categoria[];

   /**
    * La lista de todas las marcas
    */
    marcas: Marca[];

	/**
    * Ruta temporal de la foto
    */
	rutaFoto : String;


	
	anadirFoto(ruta):void{
		this.bicicleta.album.push(ruta);
		console.log("guardó ruta");
		console.log(this.bicicleta.album.toString());
	}

   getBicicleta(): void {
           this.bicicletaService.getBicicletaDetail(this.bicicleta_id)
            .subscribe(bicicleta => {
                this.bicicleta = bicicleta;
				console.log("# de fotos en album en Edit " + this.bicicleta.album.length);
				console.log("# de resenas en Edit " + this.bicicleta.resenas.length);
            });
			
    }

	
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
   * Cancela la modificacion de la bicicleta
   */
  cancelEdition(): void {
    this.cancel.emit();
	       this.router.navigate(['/bicicletas/list']);
 
	}



     /**
    * Actualiza una  Bicicleta
    */
    updateBicicleta(): void {
		console.log("# de resenas en Edit " + this.bicicleta.resenas.length);
        this.bicicletaService.updateBicicleta(this.bicicleta)
            .subscribe(() => {
                this.router.navigate(['./bicicletas/',  this.bicicleta.id]);
                this.toastrService.success("The bike was successfully edited", 'bike edition');
				console.log("# de resenas en Edit " + this.bicicleta.resenas.length);
    
            });
    }

	

    /**
    * Funcion que incializa el componente
    */
    ngOnInit() {
	   this.bicicleta_id = +this.route.snapshot.paramMap.get('id');
	     this.bicicleta = new BicicletaDetail();

	   this.getBicicleta();
		
		this.getCategorias();
		this.getMarcas();
		this.rutaFoto = this.bicicleta.album[0];
	
     }

	


}