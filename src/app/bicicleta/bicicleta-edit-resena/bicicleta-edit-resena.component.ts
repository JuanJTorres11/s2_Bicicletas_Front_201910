import {Component, OnInit, ViewChild, EventEmitter, Output, Input} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {DatePipe} from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import * as $ from "jquery";


import { Resena } from '../resena';
import { BicicletaService } from '../bicicleta.service';
import { Bicicleta } from '../../bicicleta/bicicleta';



@Component({
  selector: 'app-bicicleta-edit-resena',
  templateUrl: './bicicleta-edit-resena.component.html',
  styleUrls: ['./bicicleta-edit-resena.component.css']
})
export class BicicletaEditResenaComponent implements OnInit {

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
     private route: ActivatedRoute
  ) 
{  }
	
  /**
  *El id de la resena
  */
 @Input()resena_id: number;

  /**
  *El id de la bicicleta
  */
  @Input()bicicleta_id: number;

  /**
   * Emisor de eventos para la cancelacion de una creacion
   */
  @Output() cancel = new EventEmitter();

  /**
   * Emisor de eventos para una creacion
   */
  @Output() create = new EventEmitter();

   /**
   * La Resena que se desea publicar
   */
   resena: Resena;

   /**
   * El Event Emitter que envía la señal  cuando se publica una reseña
   * para que se refresque la lista de resenas
   */
   @Output() updateResenas = new EventEmitter();

   getResena(): void {
           this.bicicletaService.getResena(this.bicicleta_id, this.resena_id)
            .subscribe(resena => {
                this.resena = resena;
				console.log("id bike Resena: " + this.resena.bicicleta.id);
	        });
    }

	/**
    * Actualiza una resena
    */
    updateResena(): void {
	      this.bicicletaService.updateResena(this.bicicleta_id, this.resena)
            .subscribe(() => {
			    this.updateResenas.emit();
                this.router.navigate(['./bicicletas/', this.bicicleta_id]);
                this.toastrService.success("The review was successfully edited", 'review edition');
            }, err => {
                this.toastrService.error(err, 'Error');
            });
    }

	
	toggle(): void {
        $('#'+this.resena_id).modal();
    }

  /**
    * Funcion que incializa el componente
    */
    ngOnInit() {
		this.resena = new Resena();
		console.log(this.bicicleta_id);
		console.log(this.resena_id);
		this.getResena();
		
    }

    /**
    * The function which notices that the input which defines the bicicleta_id has changed.
    * If the bike has changed, we update the reviews to show
    */
    ngOnChanges() {
		console.log("entro a create r");
        this.ngOnInit();
    }

}
