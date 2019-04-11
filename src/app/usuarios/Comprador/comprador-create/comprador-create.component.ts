import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {CompradorService} from '../comprador.service';
import {Comprador} from '../comprador';

@Component({
    selector: 'app-comprador-create',
    templateUrl: './comprador-create.component.html',
    styleUrls: ['./comprador-create.component.css'],
    providers: [DatePipe]
})
export class CompradorCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param compradorService The books' services provider
    * @param authorService The authors' services provider
    * @param editorialService The editorials' services provider
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private dp: DatePipe,
        private compradorService: CompradorService,
        private toastrService: ToastrService
    ) {}

    /**
    * The new comprador
    */
    comprador: Comprador;

 
    
    /**
    * Cancels the creation of the new book
    * Redirects to the books' list page
    */
    @Output() cancel = new EventEmitter();

    @Output() create = new EventEmitter();

    /**
    * Creates a new book
    */
    createComprador(): Comprador {
        this.compradorService.createComprador(this.comprador)
            .subscribe((comprador) => {
                this.comprador = comprador;
                this.create.emit();
                this.toastrService.success("The comprador was created", "Comprador creation");
            }, err => {
                this.toastrService.error(err, "Error");
            });
        return this.comprador;
        }

          /**
   * Cancela la creacion de la marca
   */
  cancelCreation(): void {
    this.cancel.emit();
}

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.comprador = new Comprador();
     }

}