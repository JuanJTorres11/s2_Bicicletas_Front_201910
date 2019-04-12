import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {BicicletaService} from '../bicicleta.service';
import {Bicicleta} from '../bicicleta';

@Component({
    selector: 'app-bicicleta-create',
    templateUrl: './bicicleta-create.component.html',
    styleUrls: ['./bicicleta-create.component.css'],
    providers: [DatePipe]
})
export class BicicletaCreateComponent implements OnInit {

    /**
    * Constructor del componentee
    * @param bicicletaService El servicio de la Bicicleta que se comunica con el API
    * @param toastrService toastr: sirve para mostrar los mensajes al usuario
    * @param router El router
    */
    constructor(
        private dp: DatePipe,
        private bicicletaService: BicicletaService,
        private toastrService: ToastrService,
        private router: Router
    ) {}

    /**
    * La nueva Bicicleta
    */
    bicicleta: Bicicleta;

 
    
    /**
    * Cancela la creacion de una nueva bicicleta
    * Redirige  a la pagina de lista de bicicletas 
    */
    cancelCreation(): void {
        this.toastrService.warning('The book wasn\'t created', 'Book creation');
        this.router.navigate(['/books/list']);
    }

    /**
    * Crea una nueva Bicicleta
    */
    createBicicleta(): Bicicleta {
        this.bicicletaService.createBicicleta(this.bicicleta)
            .subscribe(bicicleta => {
                this.bicicleta.id = bicicleta.id;
                this.router.navigate(['/bicicleta/' + bicicleta.id]);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.bicicleta;
    }

    /**
    * Funcion que incializa el componente
    */
    ngOnInit() {
        this.bicicleta = new Bicicleta();
     }

}