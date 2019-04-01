import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';


import { BicicletaService } from '../bicicleta.service';
import { Book } from '../book';
import { BicicletaDetail } from '../bicicleta-detail';

@Component({
    selector: 'app-book-detail',
    templateUrl: './bicicleta-detail.component.html',
    styleUrls: ['./bicicleta-detail.component.css']
})
export class BicicletaDetailComponent implements OnInit, OnDestroy {

    /**
    * The constructor of the component
    * @param bookService The book service which communicates with the API
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param router The router which is needed to know when the component needs to reload
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private bicicletaService: BicicletaService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        //This is added so we can refresh the view when one of the books in
        //the "Other books" list is clicked
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.ngOnInit();
            }
        });
    }

    /**
    * The bike's id retrieved from the path
    */
    bicicleta_id: number;

    /**
    * The book whose details are shown
    */
    bicicletaDetail: BicicletaDetail;

    /**
    * The other books shown in the sidebar
    */
    other_bikes: Bicicleta[];

    /**
    * The suscription which helps to know when a new bike
    * needs to be loaded
    */
    navigationSubscription;

    /**
    * The method which retrieves the details of the bike that
    * we want to show
    */
    getBicicletaDetail(): void {
         this.bicicletaService.getBicicletaDetail(this.bicicleta_id)
            .subscribe(bicicletaDetail => {
                this.bicicletaDetail = bicicletaDetail;
            });
    }

    /**
    * This method retrieves all the books in the Bookstore to show them in the list
    */
    getOtherBicicletas(): void {
        this.bicicletaService.getBicicletas()
            .subscribe(bicicletas => {
                this.other_bicicletas = bicicletas;
                this.other_bicicletas = this.other_bicicletas.filter(bicicleta => bicicleta.id !== this.bicicleta_id);
            });
    }

    /**
    * The method which initilizes the component
    * We need to initialize the book and its editorial so that
    * they are never considered undefined
    */
    ngOnInit() {
        this.bicicleta_id = + this.route.snapshot.paramMap.get('id');
        this.bicicletaDetail = new BicicletaDetail();
        this.getBicicletaDetail();
        this.getOtherBicicleta();
    }

    /**
    * This method helps to refresh the view when we need to load another book into it
    * when one of the other books in the list is clicked
    */
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
}