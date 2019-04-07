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
    * Constructor for the component
    * @param bookService The books' services provider
    * @param authorService The authors' services provider
    * @param editorialService The editorials' services provider
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private dp: DatePipe,
        private bicicletaService: BicicletaService,
        private toastrService: ToastrService,
        private router: Router
    ) {}

    /**
    * The new book
    */
    bicicleta: Bicicleta;

 
    
    /**
    * Cancels the creation of the new book
    * Redirects to the books' list page
    */
    cancelCreation(): void {
        this.toastrService.warning('The book wasn\'t created', 'Book creation');
        this.router.navigate(['/books/list']);
    }

    /**
    * Creates a new book
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
    * This function will initialize the component
    */
    ngOnInit() {
        this.bicicleta = new Bicicleta();
     }

}