import {Component, OnInit, ViewChild, EventEmitter, Output, Input} from '@angular/core';
import {DatePipe} from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

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
     private route: ActivatedRoute,
	 private dp: DatePipe,

  ) 
{  }
	
  /**
  *El id de la resena
  */
  resena_id: number;

  /**
  *El id de la bicicleta
  */
  bicicleta_id: number;

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
           });
			
    }

	/**
    * Actualiza una  resena
    */
    updateResena(): void {
	      this.bicicletaService.updateResena(this.bicicleta_id, this.resena)
            .subscribe(() => {
                this.router.navigate(['/bicicletas/list/' + this.bicicleta_id]);
                this.toastrService.success("The review was successfully edited", 'review edition');
            });
    }

  /**
    * Funcion que incializa el componente
    */
    ngOnInit() {
		this.resena_id = +this.route.snapshot.paramMap.get('id');
		console.log(this.route.snapshot.paramMap.get('id'));
		this.resena = new Resena();
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
