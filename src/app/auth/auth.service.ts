import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxRolesService, NgxPermissionsService } from 'ngx-permissions'
import 'rxjs/add/operator/catch';
import { VendedorDetail } from '../usuarios/vendedores/vendedorDetail';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Vendedor } from '../usuarios/vendedores/vendedor';
import { Credencial } from './credencial';
import { Observable } from 'rxjs';

const API_URL = environment.apiURL;
/**
 * The service provider for everything related to authentication
 */
@Injectable()
export class AuthService {

    /**
     * Constructor of the service
     * @param router Angular's Router to redirect the user on login or logout
     * @param roleService NgxRolesService to manage authentication roles
     * @param permissionsService NgxPermissionsService to manage authentication permissions
     */
    constructor(
        private router: Router,
        private roleService: NgxRolesService,
        private permissionsService: NgxPermissionsService,
        private http: HttpClient) { }

        header: HttpHeaders = new HttpHeaders ({
            "Content-Type": "application/json"
        });

    /**
     * Inicializa los roles y permisos. <br>
     * Por defecto se inicializa como 'Invitado'. <br>
     * De lo contrario, se inicializa como Admin, Comprador o Vendedor.
     */
    start(): void {
        this.permissionsService.flushPermissions();
        this.roleService.flushRoles();
        const role = localStorage.getItem('rol');
        if (!role) {
            this.roleService.addRole('INVITADO', ['']);
        }
        else if (role === 'ADMIN') {
            this.roleService.addRole('ADMIN', ['']);
        }
        else if (role === 'COMPRADOR') {
            this.roleService.addRole('COMPRADOR', ['']);
        }
        else {
            this.roleService.addRole('VENDEDOR', ['']);
        }
    }

    /**
     * Imprime los roles.
     */
    printRole(): void {
        console.log(this.roleService.getRoles());
    }

    /**
     * Obtiene un vendedor mediante una consulta al API
     * @param credenciales Credenciales de inicio de sesión.
     */
    getVendedor(credenciales:Credencial): Observable<VendedorDetail> {
       return this.http.post<VendedorDetail>(API_URL + '/vendedores/auth', credenciales, {headers: this.header}).pipe();
    }

    /**
     * Registra un nuevo vendedor mediante el API
     * @param ven Vendedor a registrar.
     */
    postVendedor(ven: Vendedor): Observable<VendedorDetail> {
       return this.http.post<Vendedor>(API_URL + '/vendedores', ven, {headers: this.header}).pipe();
    }

    /**
     * Cierra la sesión
     */
    logout(): void {
        this.roleService.flushRoles();
        this.roleService.addRole('INVITADO', ['']);
        localStorage.clear();
        this.router.navigateByUrl('/');
    }
}