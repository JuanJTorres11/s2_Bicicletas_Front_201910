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
        private service: AuthService,
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
        if (this.rol == 'Administrador') {
            this.service.setAdministradorRole();
            this.router.navigateByUrl('/');
        }
        else if (this.rol == 'Comprador') {
            // TODO
        }
        else {
            this.vendedor = new Vendedor();
            this.vendedor.nombre = this.nombre;
            this.vendedor.login = this.login;
            this.vendedor.password = this.password;
            this.vendedor.telefono = this.telefono;
            this.service.postVendedor(this.vendedor).subscribe(vendedorBD => {
                localStorage.setItem('id', vendedorBD.id.toString());
                let id = vendedorBD.id;
                localStorage.setItem('nombre', vendedorBD.nombre);
                localStorage.setItem('login', vendedorBD.login);
                localStorage.setItem('telefono', vendedorBD.telefono.toString())
                this.service.setVendedorRole();
                this.toastrService.success('Se registró correctamente');
                this.router.navigateByUrl('/vendedores/' + id);
            });
        }
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.user = new Usuario();
        this.roles = ['Administrador', 'Comprador', 'Vendedor'];
    }
}