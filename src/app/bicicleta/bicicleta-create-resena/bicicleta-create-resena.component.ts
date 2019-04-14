import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { Resena } from '../resena';
import { BicicletaService } from '../bicicleta.service';
import { Bicicleta } from '../../bicicleta/bicicleta';
@Component({
    selector: 'app-bicicleta-create-resena',
    templateUrl: './bicicleta-create-resena.component.html',
    styleUrls: ['./bicicleta-create-resena.component.css']
})
export class BicletaCreateResenaComponent implements OnInit, OnChanges {

   /**
    * El constructor del componente
    * @param bicicletaService El servicio de la Bicicleta que se comunica con el API
    * @param toastrService toastr: sirve para mostrar los mensajes al usuario
    */
    constructor(
        private bicicletaService: BicicletaService,
        private toastrService: ToastrService
    ) { }

    /**
    * la Bicicleta
    */
    @Input() bicicleta: Bicicleta;

    /**
    * La Resena que se desea publicar
    */
    resena: Resena;
    
    public isCollapsed = true;

    /**
    * El Event Emitter que envía la señal  cuando se publica una reseña
    * para que se refresque la lista de resenas
    */
    @Output() updateResenas = new EventEmitter();

     /**
    * Funcion que crea una resena
    * @param reviewForm The form of the review
    */
    postResena(reviewForm: NgForm): Resena {
        this.resena.bicicleta = this.bicicleta;
        this.bicicletaService.createResena(this.bicicleta.id,this.resena)
            .subscribe(() => {
                reviewForm.resetForm();
                this.updateResenas.emit();
                this.toastrService.success("The review was successfully created", 'Review added');
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.resena;
    }



    /**
    * Funcion que incializa el componente
    */
    ngOnInit() {
        this.resena = new Resena();
		
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