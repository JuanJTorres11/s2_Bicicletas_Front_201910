import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { Usuario } from '../../usuarios/usuario';
import { Vendedor } from '../../usuarios/vendedores/vendedor';
import { Comprador } from '../../usuarios/Comprador/comprador';
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

    vendedor: Vendedor;

    comprador: Comprador;

    rol: string;
    nombre: string;
    login: string;
    password: string;
    telefono: number;

    roles: string[];

    /**
    * Sign the user up with the selected role
    */
    signUp(): void {
        if (this.rol == 'Administrador') {
            this.router.navigateByUrl('/');
        }
        else if (this.rol == 'Comprador' || this.rol == 'comprador' ||  this.rol == 'COMPRADOR' ) {
            this.comprador = new Comprador();
            this.comprador.nombre = this.nombre;
            this.comprador.login = this.login;
            this.comprador.password = this.password;
            this.service.postComprador(this.comprador).subscribe(compradorBD => {
                localStorage.setItem('id', compradorBD.id.toString());
                let id = compradorBD.id;
                localStorage.setItem('nombre', compradorBD.nombre);
                localStorage.setItem('login', compradorBD.login);
                this.toastrService.success('Se registró correctamente');
                this.router.navigateByUrl('/compradores/' + id);
            }
            );
        }
        else if ((this.rol == 'Vendedor' || this.rol == 'vendedor' ||  this.rol == 'VENDEDOR')) {
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
                this.toastrService.success('Se registró correctamente');
                this.router.navigateByUrl('/vendedores/' + id);
            });
        }
        this.service.setRol(this.rol);
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.user = new Usuario();
        this.roles = ['Administrador', 'Comprador', 'Vendedor'];
    }
}