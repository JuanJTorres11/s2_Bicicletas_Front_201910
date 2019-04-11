import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {VentaService} from '../venta.service';
import {Venta} from '../venta';

@Component({
    selector: 'app-venta-create',
    templateUrl: './venta-create.component.html',
    styleUrls: ['./venta-create.component.css'],
    providers: [DatePipe]
})
export class VentaCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param VentaService The books' services provider
    * @param ventaService The authors' services provider
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private dp: DatePipe,
        private ventaService: VentaService,
        private toastrService: ToastrService
    ) {}

    /**
    * The new comprador
    */
    venta: Venta;

 
    
    /**
    * Cancels the creation of the new book
    * Redirects to the books' list page
    */
    @Output() cancel = new EventEmitter();

    @Output() create = new EventEmitter();

    /**
    * Creates a new book
    */
    createVenta(): Venta {
        this.ventaService.createVenta(this.venta)
            .subscribe((venta) => {
                this.venta = venta;
                this.create.emit();
                this.toastrService.success("The venta was created", "Venta creation");
            }, err => {
                this.toastrService.error(err, "Error");
            });
        return this.venta;
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
        this.venta = new Venta();
     }

}