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
  selector: 'app-bicicleta-delete',
  templateUrl: './bicicleta-delete.component.html',
  styleUrls: ['./bicicleta-delete.component.css']
})
export class BicicletaDeleteComponent implements OnInit {

  constructor(
  
     private bicicletaService: BicicletaService,
     private toastrService: ToastrService,
     private router: Router,
     private route: ActivatedRoute
) { }

/**
  *El id de la bicicleta
  */
  @Input()bicicleta_id: number;

  /**
   * El Event Emitter que envía la señal  cuando se publica una reseña
   * para que se refresque la lista de resenas
   */
   @Output() updateBicicletas = new EventEmitter();


  toggle(): void {

        $('#eliminar'+this.bicicleta_id).modal();
    }

	hide(): void{
		$('#eliminar'+this.bicicleta_id).modal('hide')
	}

	/**
    * Eliminar una bicicleta
    */
    deleteBicicleta(): void {
		console.log("entro a delete B");
	      this.bicicletaService.deleteBicicleta(this.bicicleta_id)
            .subscribe(() => {
			    this.updateBicicletas.emit();
                this.router.navigate(['./bicicletas/list']);
				this.hide();
                this.toastrService.success("The bike was successfully deleted", 'bike deletion');
            }, err => {
                this.toastrService.error(err, 'Error');
            });
    }

  ngOnInit() {
  }

}
