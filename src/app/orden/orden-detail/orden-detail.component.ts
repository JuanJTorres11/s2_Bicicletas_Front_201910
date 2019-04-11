import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import {Orden} from '../orden';
import { OrdenService } from '../orden.service';
import { OrdenDetail } from '../orden-detail';

/**
 * El componente para el detalle de una orden
 */
@Component({
  selector: 'app-orden-detail',
  templateUrl: './orden-detail.component.html',
  styleUrls: ['./orden-detail.component.css']
})
export class OrdenDetailComponent implements OnInit {

  /**
   * Constructor del componente
   * @param ordenService El servicio de la orden que se comunica con el API
   * @param route La ruta que ayuda a obtener el id de la orden a mostrar
   */
  constructor(
    private ordenService: OrdenService,
    private route: ActivatedRoute
  ) { }

  /**
   * El detalle de la orden
   */
  ordenDetail: OrdenDetail;

  /**
   * El id de la orden. Se recibe como input
   */
  @Input() orden_id: number;

  loader: any;

  /**
   * El metodo que retorna los detalles de la orden
   * que se quiere ensenar
   */
  getOrdenDetail(): void {
    this.ordenService.getOrdenDetail(this.orden_id)
    .subscribe(o => {
        this.ordenDetail = o
    })
  }

  /**
   * Crea el detalle de la orden con los parametros recibidos
   * @param params parametros recibidos del detalle
   */
  onLoad(params){
    this.orden_id= parseInt(params['id']);
    this.ordenDetail = new OrdenDetail();
    this.getOrdenDetail();
  }

  /**
   * Esto inicializara el componente tomando el detalle de la orden del servicio
   * Este metodo sera llamado cuando se cree el componente
   */
  ngOnInit() {
    this.loader = this.route.params.subscribe((params:Params) => this.onLoad(params));
  }

  /**
   * Esto destruira el componente borrando el detalle de la orden del servicio
   * Este metodo sera llamado cuando se destruya el componente
   */
  ngOnDestroy(): void {
    this.loader.unsubscribe();
  }

}
