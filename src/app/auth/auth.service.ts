import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {NgxRolesService, NgxPermissionsService} from 'ngx-permissions'
import 'rxjs/add/operator/catch';
import { VendedorDetail } from '../usuarios/vendedores/vendedorDetail';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Vendedor } from '../usuarios/vendedores/vendedor';
import { Usuario } from '../usuarios/usuario';

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
    constructor (
        private router: Router,
        private roleService: NgxRolesService,
        private permissionsService: NgxPermissionsService,
        private http: HttpClient ) {}

    /**
     * Inicializa los roles y permisos. <br>
     * Por defecto se inicializa como 'Invitado'. <br>
     * De lo contrario, se inicializa como Admin, Comprador o Vendedor.
     */
    start (): void {
        this.permissionsService.flushPermissions();
        this.roleService.flushRoles();
        const role = localStorage.getItem('rol');
        if (!role) {
            this.setInvitadoRole();
        }
        else if (role === 'ADMIN') {
            this.setAdministradorRole();
        }
        else if (role === 'COMPRADOR') {
            this.setCompradorRole();
        }
        else {
            this.setVendedorRole();
        }
    }

    /**
     * Inicializa le rol Invitado
     */
    setInvitadoRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('INVITADO', ['']);
    }

    /**
     * Inicializa le rol Comprador
     */
    setCompradorRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('COMPRADOR', ['']);
        localStorage.setItem('rol', 'COMPRADOR');
    }

    /**
     * Inicializa le rol Vendedor
     */
    setVendedorRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('VENDEDOR', ['']);
        localStorage.setItem('rol', 'VENDEDOR');
    }

    /**
     * Inicializa le rol Administrador
     */
    setAdministradorRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('ADMIN', ['']);
        localStorage.setItem('rol', 'ADMIN');
    }

    /**
     * Imprime los roles.
     */
    printRole (): void {
        console.log(this.roleService.getRoles());
    }

    
    /**
     * Inicia sesión de un usuario con su rol, correo y contraseña
     * @param role Rol del usuario (obligatorio siempre)
     * @param login Login o correo del usuario (necesario para iniciar como comprador o vendedor)
     * @param password contraseña del usuario (necesario para iniciar como comprador o vendedor)
     */
    login (role:string, login?:string, password?:string): void {
        if (role === 'Administrador') {
            this.setAdministradorRole();
            this.router.navigateByUrl('/');
        }
        else if (role === 'Comprador') {
            // TODO
        }
        else {
            this.getVendedor(login, password);
            let id = localStorage.getItem('id');
            this.setVendedorRole;
            this.router.navigateByUrl('/vendedores/' + id);
        }
    }

    /**
     * Registro de un usuario nuevo
     * @param role Rol del usuario
     * @param nombre Nombre del usuario
     * @param login Login o correo del usuario
     * @param password Contraseña del usuario
     * @param telefono Telefono (si es vendedor)
     */
    signUp(role:string, user?:Usuario, ven?:Vendedor):void {
        if (role === 'Administrador') {
            this.setAdministradorRole();
            this.router.navigateByUrl('/');
        }
        else if (role === 'Comprador') {
            // TODO
        }
        else {
            this.postVendedor(ven);
            let id = localStorage.getItem('id');
            this.setVendedorRole;
            this.router.navigateByUrl('/vendedores/' + id);
        }
    }

    /**
     * Obtiene un vendedor mediante una consulta al API
     * @param login Correo del vendedor a buscar
     * @param password Contraseña del vendedor
     */
    getVendedor (login:string, password:string) : VendedorDetail {
        let vendedor:VendedorDetail;

        this.http.get<VendedorDetail>(API_URL).subscribe(vendedorBD => {
            localStorage.setItem('id', vendedorBD.id.toString());
            localStorage.setItem('nombre', vendedorBD.nombre);
            vendedor = vendedorBD;
        });
        return vendedor;
    }

    /**
     * Registra un nuevo vendedor mediante el API
     * @param nombre Nombre del vendedor nuevo
     * @param login Correo del vendedor nuevo
     * @param password Contraseña del vendedor nuevo
     * @param telefono Telefono del vendedor nuevo
     */
    postVendedor(ven:Vendedor) : Vendedor {
        let vendedor:Vendedor;
        this.http.post<Vendedor>(API_URL, ven).subscribe(vendedorBD => {
            localStorage.setItem('id', vendedorBD.id.toString());
            localStorage.setItem('nombre', vendedorBD.nombre);
            vendedor = vendedorBD;
        });
        return vendedor;
    }

    /**
     * Cierra la sesión
     */
    logout (): void {
        this.roleService.flushRoles();
        this.setInvitadoRole();
        localStorage.clear();
        this.router.navigateByUrl('/');
    }
}