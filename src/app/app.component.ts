import {Component, OnInit} from '@angular/core';

/**
 * The app component. This component is the base of s2_bicicletas-Front
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    /**
     * The title that appears on the NavBar and the web browser
     */
    title: String;

    /**
     * Boolean para indicar si mostrar los botones de inicio de sesión
     * o los de perfil.
     */
    sesionIniciada = false;
    
    /**
     * Boolean para indicar a dónde redirigen los botones de perfil.
     */
    esVendedor = false;

    /**
     * Assigns a title to the web page
     */
    ngOnInit(): void {
        this.title = "s2_bicicletas-Front";
    }

       /**
     * @ignore
     */
    constructor() { }

    
    }
