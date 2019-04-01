
import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Bicicleta} from '../bicicleta';
import {BicicletaService} from '../bicicleta.service';

/**
 * The component for the list of bikes in the BikeStore
 */
@Component({
    selector: 'app-bicicleta',
    templateUrl: './bicicleta-list.component.html',
    styleUrls: ['./bicicleta-list.component.css'] 
})
export class BicicletaListComponent implements OnInit {

    /**
     * Constructor of the component
     * @param bookService The book's services provider
     */
    constructor(
	private bicicletaService: BicicletaService,
	 private route: ActivatedRoute
	) {}

    /**
     * The list of books in the BookStore
     */
    bicicletas: Bicicleta[];

    /**
     * Asks the service to update the list of books
     */
    getBicicletas(): void {
        this.bicicletaService.getBicicletas()
            .subscribe(bicicletas => this.bicicletas = bicicletas);
    }

    /**
     * This will initialize the component by retrieving the list of books from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getBicicletas();
    }
}