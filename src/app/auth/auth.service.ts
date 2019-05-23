import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxRolesService } from 'ngx-permissions'
import 'rxjs/add/operator/catch';
import { VendedorDetail } from '../usuarios/vendedores/vendedorDetail';
import { CompradorDetail } from '../usuarios/comprador/comprador-detail';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Vendedor } from '../usuarios/vendedores/vendedor';
import { Comprador } from '../usuarios/comprador/comprador'
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
        const role = localStorage.getItem('rol');
        this.setRol(role);
    }

    setRol(rol:string):void {
        this.roleService.flushRoles();
        if (rol === undefined || rol === null || rol === 'INVITADO' || rol==="Invitado") {
            this.roleService.addRole('INVITADO', ['']);
        }
        else if (rol === 'ADMIN' || rol ==="Administrador") {
            this.roleService.addRole('ADMIN', ['']);
            localStorage.setItem('rol', 'ADMIN');
        }
        else if (rol === 'COMPRADOR' || rol ==="Comprador" || rol === "compradores") {
            this.roleService.addRole('COMPRADOR', ['']);
            localStorage.setItem('rol', 'compradores');
        }
        else {
            this.roleService.addRole('VENDEDOR', ['']);
            localStorage.setItem('rol', 'vendedores');
        }
    }

        /**
     * Obtiene un comprador mediante una consulta al API
     * @param credenciales Credenciales de inicio de sesión.
     */
    getComprador(credenciales:Credencial): Observable<CompradorDetail> {
        return this.http.post<CompradorDetail>(API_URL + '/compradores/auth', credenciales, {headers: this.header}).pipe();
     }

    /**
     * Obtiene un vendedor mediante una consulta al API
     * @param credenciales Credenciales de inicio de sesión.
     */
    getVendedor(credenciales:Credencial): Observable<VendedorDetail> {
       return this.http.post<VendedorDetail>(API_URL + '/vendedores/auth', credenciales, {headers: this.header}).pipe();
    }

        /**
     * Registra un nuevo comprador mediante el API
     * @param com comprador a registrar.
     */
    postComprador(com: Comprador): Observable<CompradorDetail> {
        return this.http.post<CompradorDetail>(API_URL + '/compradores', com, {headers: this.header}).pipe();
     }

    /**
     * Registra un nuevo vendedor mediante el API
     * @param ven Vendedor a registrar.
     */
    postVendedor(ven: Vendedor): Observable<VendedorDetail> {
       return this.http.post<VendedorDetail>(API_URL + '/vendedores', ven, {headers: this.header}).pipe();
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