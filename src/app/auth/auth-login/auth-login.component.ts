import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { AuthService } from '../auth.service';

import { Usuario } from '../../usuarios/usuario';

import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-auth-login',
    templateUrl: './auth-login.component.html',
    styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

    /**
    * Constructor for the component
    * @param authService Auth service provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private authService: AuthService,
        private toastrService: ToastrService,
    ) { }

    usuario:Usuario;

    roles: String[];

    /**
    * Logs the user in with the selected role
    */
    login(): void {
        this.authService.login(this.usuario.rol, this.usuario.login, this.usuario.password);
        this.toastrService.success('Se inició sesión correctamente')
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.usuario = new Usuario();
        this.roles = ['Administrador', 'Comprador', 'Vendedor'];
    }
}