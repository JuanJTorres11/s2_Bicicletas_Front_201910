import {Component, OnInit, ViewChild, EventEmitter, Output, Input} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {DatePipe} from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

import { Resena } from '../resena';
import { BicicletaService } from '../bicicleta.service';
import { Bicicleta } from '../../bicicleta/bicicleta';

declare var $: any;

@Component({
  selector: 'app-bicicleta-delete-resena',
  templateUrl: './bicicleta-delete-resena.component.html',
  styleUrls: ['./bicicleta-delete-resena.component.css']
})
export class BicicletaDeleteResenaComponent implements OnInit {

  constructor(
  
     private bicicletaService: BicicletaService,
     private toastrService: ToastrService,
     private router: Router,
     private route: ActivatedRoute

  ) { 
  
  }

  /**
  *El id de la resena
  */
 @Input()resena_id: number;

  /**
  *El id de la bicicleta
  */
  @Input()bicicleta_id: number;

  /**
   * El Event Emitter que envía la señal  cuando se publica una reseña
   * para que se refresque la lista de resenas
   */
   @Output() updateResenas = new EventEmitter();


  toggle(): void {

        $('#eliminar'+this.resena_id).modal();
    }

	hide(): void{
		$('#eliminar'+this.resena_id).modal('hide')
	}

	/**
    * Eliminar una resena
    */
    deleteResena(): void {
		console.log("entro a delete R");
	      this.bicicletaService.deleteResena(this.bicicleta_id, this.resena_id)
            .subscribe(() => {
			    this.updateResenas.emit();
                this.router.navigate(['./bicicletas/', this.bicicleta_id]);
				this.hide();
                this.toastrService.success("The review was successfully deleted", 'review deletion');
            }, err => {
                this.toastrService.error(err, 'Error');
            });
    }


  ngOnInit() {
  }

}
