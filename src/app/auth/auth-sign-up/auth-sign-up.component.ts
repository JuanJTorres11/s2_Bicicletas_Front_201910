import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { Usuario } from '../../usuarios/usuario';
import { Vendedor } from '../../usuarios/vendedores/vendedor';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-auth-sign-up',
    templateUrl: './auth-sign-up.component.html',
    styleUrls: ['./auth-sign-up.component.css']
})
export class AuthSignUpComponent implements OnInit {

    /**
    * Constructor for the component
    * @param authService Auth service provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        private toastrService: ToastrService,
    ) { }

    user: Usuario;

    vendedor:Vendedor;

    rol:string;
    nombre:string;
    login:string;
    password:string;
    telefono:number;

    roles: String[];

    /**
    * Sign the user up with the selected role
    */
    signUp(): void {
        if (this.rol =='Vendedor') {
            this.vendedor.nombre = this.nombre;
            this.vendedor.login = this.login;
            this.vendedor.password = this.password;
            this.vendedor.telefono = this.telefono;
            this.authService.signUp(this.rol, this.vendedor);
        }
        else {
            //TODO
        }
        this.toastrService.success('Se registró correctamente')
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.user = new Usuario();
        this.roles = ['Administrador', 'Comprador', 'Vendedor'];
    }
}