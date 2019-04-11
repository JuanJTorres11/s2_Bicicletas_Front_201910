import {Component, OnInit, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';


import { BicicletaService } from '../bicicleta.service';
import { Bicicleta } from '../bicicleta';
import { BicicletaDetail } from '../bicicleta-detail';
import { BicicletaResenaComponent } from '../bicicleta-resena/bicicleta-resena.component';
import { BicletaCreateResenaComponent } from '../bicicleta-create-resena/bicicleta-create-resena.component';

@Component({
    selector: 'app-bicicleta-detail',
    templateUrl: './bicicleta-detail.component.html',
    styleUrls: ['./bicicleta-detail.component.css']
})
export class BicicletaDetailComponent implements OnInit, OnDestroy {

    /**
    * El contructor del componente
    * @param bicicletaService El servicio de la Bicicleta que se comunica con el API
    * @param route Route para recibir el id de la Bicicleta que se desea mostrar
    * @param router El router que se necesita para saber cuando se debe refrescar el componente
    * @param toastrService toastr: sirve para mostrar los mensajes al usuario
    */
    constructor(
        private bicicletaService: BicicletaService,
        private route: ActivatedRoute,
        private modalDialogService: ModalDialogService,
        private router: Router,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService
    ) {
        //This is added so we can refresh the view when one of the bikes in
        //the "Other bikes" list is clicked
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.ngOnInit();
            }
        });
    }

    /**
    * El id de la bicicleta que se recibe en el path
    */
    bicicleta_id: number;

    /**
    * La bicicleta cuyo detalle se muestra
    */
    bicicletaDetail: BicicletaDetail;

	
    /**
    * Los otros libros que se muestran al final de la pagina
    */
    other_bicicletas: Bicicleta[];

    /**
    * La suscripcion con la que se sabe cuando se necesita cargar una bicicleta
    */
    navigationSubscription;

	/**
     * El hijo BicicletaResenaComponent
     */
    @ViewChild(BicicletaResenaComponent) resenaListComponent: BicicletaResenaComponent;

	/**
     * El hijo BicletaCreateResenaComponent
     */
    @ViewChild(BicletaCreateResenaComponent) resenaCreateComponent: BicletaCreateResenaComponent;

	toggleReviews(): void {
        if (this.resenaCreateComponent.isCollapsed == false) {
            this.resenaCreateComponent.isCollapsed = true;
        }
        this.resenaListComponent.isCollapsed = !this.resenaListComponent.isCollapsed;
    }

    toggleCreateReview(): void {
        if (this.resenaListComponent.isCollapsed == false) {
            this.resenaListComponent.isCollapsed = true;
        }
        this.resenaCreateComponent.isCollapsed = !this.resenaCreateComponent.isCollapsed;
    }

	/**
     * funcion que se llama cuando se publica una resena, para que el componente hijo actualice la lista
     */
    updateResenas(): void {
        this.getBicicletaDetail();
        this.resenaListComponent.updateResenas(this.bicicletaDetail.resenas);
        this.resenaListComponent.isCollapsed = false;
		 this.resenaCreateComponent.isCollapsed = true;
     }
	  


    /**
    * Metodo que trae los detalles de la bicicleta que se desean mostrar
    */
    getBicicletaDetail(): void {

         this.bicicletaService.getBicicletaDetail(this.bicicleta_id)
            .subscribe(bicicletaDetail => {
                this.bicicletaDetail = bicicletaDetail;
					console.log(this.bicicletaDetail.album.length);
   
            });
    }

    /**
    * Este metodo trae todos los libros de la tienda para mostrarlos en la lista
    */
    getOtherBicicletas(): void {
        this.bicicletaService.getBicicletas()
            .subscribe(bicicletas => {
                this.other_bicicletas = bicicletas;
                this.other_bicicletas = this.other_bicicletas.filter(bicicleta => bicicleta.id !== this.bicicleta_id);
            });
    }

    /**
    * metodo que incializa el componente
    * Se necesita incializar el libro de modo que nunca aparezca como undefined
    */
    ngOnInit() {
        this.bicicleta_id = + this.route.snapshot.paramMap.get('id');
        this.bicicletaDetail = new BicicletaDetail();
        this.getBicicletaDetail();
        this.getOtherBicicletas();
	 }

    /**
    * Este metodo refresca la vista cuando necesitamos cargar otro libro
    */
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }


}