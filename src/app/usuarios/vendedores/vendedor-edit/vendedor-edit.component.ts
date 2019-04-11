import { Component, OnInit } from '@angular/core';
import { VendedorService } from '../vendedor.service';
import { VendedorDetail } from '../vendedorDetail';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vendedor-edit',
  templateUrl: './vendedor-edit.component.html',
  styleUrls: ['./vendedor-edit.component.css']
})
export class VendedorEditComponent implements OnInit {

  constructor(
    private service: VendedorService,
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService) { }

  /**
     * Vendedor que se mostrará
     */
  vendedor: VendedorDetail;

  /**
   * Identificador que llega en la ruta
   */
  id: number;

  nombreActual:string;
  nombreNuevo:string;
  confNombre:string;
  correoActual:string;
  correoNuevo:string;
  confCorreo:string;
  telefonoActual:number;
  telefonoNuevo:number;
  confTelefono:number;
  passwordActual:string;
  passwordNueva:string;
  confPassword:string;

  cambiarNombre() {
    if(this.nombreActual != this.vendedor.nombre) {
      this.toastrService.error("El Nombre actual no coincide");
    }
    else {
      if (this.nombreNuevo == this.confNombre) {
        this.vendedor.nombre = this.nombreNuevo;
      }
      else {
        this.toastrService.error("Los nombres nuevos no coinciden");
      }
    }
  }

  cambiarCorreo() {
    if(this.correoActual != this.vendedor.login) {
      this.toastrService.error("El correo actual no coincide");
    }
    else {
      if (this.correoNuevo == this.confCorreo) {
        this.vendedor.login = this.correoNuevo;
      }
      else {
        this.toastrService.error("Los correos nuevos no coinciden");
      }
    }
  }

  cambiarTelefono() {
    if(this.telefonoActual != this.vendedor.telefono) {
      this.toastrService.error("El telefono actual no coincide");
    }
    else {
      if (this.telefonoNuevo == this.confTelefono) {
        this.vendedor.telefono = this.telefonoNuevo;
      }
      else {
        this.toastrService.error("Los telefonos nuevos no coinciden");
      }
    }
  }

  cambiarpassword() {
    if(this.passwordActual != this.vendedor.password) {
      this.toastrService.error("La password actual no coincide");
    }
    else {
      if (this.passwordNueva == this.confPassword) {
        this.vendedor.password = this.passwordNueva;
      }
      else {
        this.toastrService.error("Las passwords nuevos no coinciden");
      }
    }
  }

  /**
   * Obtiene el vendedor actual
   */
  getVendedorDetail(): void {
    this.service.getVendedorDetail(this.id).subscribe((vendedorRemoto) => {
      this.vendedor = vendedorRemoto
    });
  }

  putVendedor():void {
    this.service.putVendedor(this.id, this.vendedor).subscribe((vendedorRemoto) => {
      this.vendedor = vendedorRemoto
    });
    this.toastrService.success('Se inició sesión correctamente');
    this.router.navigateByUrl('/vendedores/' + this.id);
  }

  deleteVendedor():void {
    this.service.deleteVendedor(this.id);
    this.router.navigateByUrl('/home');
  }

  /**
   * Método que se ejecuta cuando se crea el componente
   */
  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.vendedor = new VendedorDetail();
      this.getVendedorDetail();
    }
  }

}
