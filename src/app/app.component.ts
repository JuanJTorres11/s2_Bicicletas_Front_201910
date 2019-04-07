import {Component, OnInit} from '@angular/core';
import { AuthService } from './auth/auth.service';

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
     * @ignore
     */
    constructor(private authService: AuthService) { }

    /**
     * Asigna el titulo de la página e inicializa la autenticación
     */
    ngOnInit(): void {
        this.title = "TIENDA DE BICICLETAS";
        this.authService.start();
    }

    /**
     * Cierra la sesión
     */
    logout(): void {
        this.authService.logout()
    }
}