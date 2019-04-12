import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service';
import { Usuario } from '../../usuarios/usuario';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Credencial } from '../credencial';

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
        private route: ActivatedRoute,
        private router: Router,
        private service: AuthService,
        private toastrService: ToastrService
    ) { }

    usuario: Usuario;

    roles: string[];

    /**
     * Inicia sesión de un usuario con su rol, correo y contraseña
     */
    login(): void {
        let credenciales = new Credencial();
        credenciales.login = this.usuario.login;
        credenciales.password = this.usuario.password;

        if (this.usuario.rol == 'Administrador') {
            this.service.setAdministradorRole();
            this.router.navigateByUrl('/');
        }

        else if (this.usuario.rol === 'Comprador') {
            // TODO
        }
        else {
            this.service.getVendedor(credenciales).subscribe(vendedorBD => {
                localStorage.setItem('id', vendedorBD.id.toString());
                let id = vendedorBD.id;
                localStorage.setItem('nombre', vendedorBD.nombre);
                localStorage.setItem('login', vendedorBD.login);
                localStorage.setItem('telefono', vendedorBD.telefono.toString());
                this.service.setVendedorRole();
                this.toastrService.success('Se inició sesión correctamente');
                this.router.navigateByUrl('/vendedores/' + id);

            });
        }
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.usuario = new Usuario();
        this.roles = ['Administrador', 'Comprador', 'Vendedor'];
    }
}