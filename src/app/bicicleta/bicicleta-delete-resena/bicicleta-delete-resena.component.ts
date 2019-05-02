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


  toggle(): void {

        $('#eliminar'+this.resena_id).modal();
    }

	hide(): void{
		$('#'+this.resena_id).modal('hide')
	}

  ngOnInit() {
  }

}
