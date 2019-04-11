import {Component, OnInit, ViewChild} from '@angular/core';
import {DatePipe} from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

import {BicicletaService} from '../bicicleta.service';
import {Bicicleta} from '../bicicleta';
import {BicicletaDetail} from '../bicicleta-detail';

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
        private dp: DatePipe,
        private bicicletaService: BicicletaService,
        private toastrService: ToastrService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    model: any;
   

    bicicleta_id: number;
   

   

    /**
    * Funcion que incializa el componente
    */
    ngOnInit() {
        this.bicicleta_id = +this.route.snapshot.paramMap.get('id');
    }


}