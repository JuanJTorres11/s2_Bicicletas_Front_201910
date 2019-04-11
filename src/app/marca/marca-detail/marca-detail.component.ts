import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import {Marca} from '../marca';
import { MarcaService } from '../marca.service';
import { MarcaDetail } from '../marca-detail';

/**
 * El componente para el detalle de una marca
 */
@Component({
  selector: 'app-marca-detail',
  templateUrl: './marca-detail.component.html',
  styleUrls: ['./marca-detail.component.css']
})
export class MarcaDetailComponent implements OnInit {

  /**
   * Constructor del componente
   * @param marcaService El servicio de la marca que se comunica con el API
   * @param route La ruta que ayuda a obtener el id de la marca a mostrar
   */
  constructor(
    private marcaService: MarcaService,
    private route: ActivatedRoute
  ) { }

  /**
   * El detalle de la marca
   */
  marcaDetail: MarcaDetail;

  /**
   * El id de la marca. Se recibe como input
   */
  @Input() marca_id: number;

  loader: any;

  /**
   * El metodo que retorna los detalles de la marca
   * que se quiere ensenar
   */
  getMarcaDetail(): void {
    this.marcaService.getMarcaDetail(this.marca_id)
    .subscribe(o => {
        this.marcaDetail = o
    })
  }

  /**
   * Crea el detalle de la marca con los parametros recibidos
   * @param params parametros recibidos del detalle
   */
  onLoad(params){
    this.marca_id= parseInt(params['id']);
    this.marcaDetail = new MarcaDetail();
    this.getMarcaDetail();
  }

  /**
   * Esto inicializara el componente tomando el detalle de la marca del servicio
   * Este metodo sera llamado cuando se cree el componente
   */
  ngOnInit() {
    this.loader = this.route.params.subscribe((params:Params) => this.onLoad(params));
  }

  /**
   * Esto destruira el componente borrando el detalle de la marca del servicio
   * Este metodo sera llamado cuando se destruya el componente
   */
  ngOnDestroy(): void {
    this.loader.unsubscribe();
  }

}
