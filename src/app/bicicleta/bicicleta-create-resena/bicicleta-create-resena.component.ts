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
    * The constructor of the component
    * @param bookService The book service which communicates with the API
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private bicicletaService: BicicletaService,
        private toastrService: ToastrService
    ) { }

    /**
    * The book's id
    */
    @Input() bicicleta: Bicicleta;

    /**
    * The review to post
    */
    resena: Resena;
    
    public isCollapsed = true;

    /**
    * The Event Emitter which sends the signal when a review has just been posted
    * so that the list of reviews refreshes
    */
    @Output() updateResenas = new EventEmitter();

    

    /**
    * The function which initializes the component.
    */
    ngOnInit() {
        this.resena = new Resena();
    }

    /**
    * The function which notices that the input which defines the book_id has changed.
    * If the book has changed, we update the reviews to show
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}