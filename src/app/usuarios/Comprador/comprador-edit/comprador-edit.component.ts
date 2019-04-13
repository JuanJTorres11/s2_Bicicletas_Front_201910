import {Component, OnInit, ViewChild} from '@angular/core';
import {DatePipe} from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

import {CompradorService} from '../comprador.service';
import {Comprador} from '../comprador';
import {CompradorDetail} from '../comprador-detail';

@Component({
    selector: 'app-comprador-edit',
    templateUrl: './comprador-edit.component.html',
    styleUrls: ['./comprador-edit.component.css']
  })

  export class CompradorEditComponent implements OnInit{

    constructor(
        private service: CompradorService,
        private route: ActivatedRoute,
        private router: Router,
        private toastrService: ToastrService) { }

  /**
     * Comprador que se mostrará
     */
    comprador: CompradorDetail;

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
  passwordActual:string;
  passwordNueva:string;
  confPassword:string;
        

  cambiarNombre() {
    if(this.nombreActual != this.comprador.nombre) {
      this.toastrService.error("El Nombre actual no coincide");
    }
    else {
      if (this.nombreNuevo == this.confNombre) {
        this.comprador.nombre = this.nombreNuevo;
      }
      else {
        this.toastrService.error("Los nombres nuevos no coinciden");
      }
    }
  }

  cambiarCorreo() {
    if(this.correoActual != this.comprador.login) {
      this.toastrService.error("El correo actual no coincide");
    }
    else {
      if (this.correoNuevo == this.confCorreo) {
        this.comprador.login = this.correoNuevo;
      }
      else {
        this.toastrService.error("Los correos nuevos no coinciden");
      }
    }
  }

  cambiarpassword() {
    if(this.passwordActual != this.comprador.password) {
      this.toastrService.error("La password actual no coincide");
    }
    else {
      if (this.passwordNueva == this.confPassword) {
        this.comprador.password = this.passwordNueva;
      }
      else {
        this.toastrService.error("Las passwords nuevos no coinciden");
      }
    }
  }

    /**
   * Obtiene el Comprador actual
   */
  getCompradorDetail(): void {
    this.service.getCompradorDetail(this.id).subscribe((comprador) => {
      this.comprador = comprador
    });
  }

  putVendedor():void {
    this.service.putComprador(this.id, this.comprador).subscribe((comprador) => {
      this.comprador = comprador
    });
    this.toastrService.success('Se inició sesión correctamente');
    this.router.navigateByUrl('/comprador/' + this.id);
  }

    /**
   * Método que se ejecuta cuando se crea el componente
   */
  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.comprador = new CompradorDetail();
      this.getCompradorDetail();
    }
  }
  }