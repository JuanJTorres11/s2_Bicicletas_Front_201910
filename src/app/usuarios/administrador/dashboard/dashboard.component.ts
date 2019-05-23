import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../../assets/canvasjs.min';
import * as $ from "jquery";
import { AdministradorService } from '../administrador.service';
import { OrdenDetail } from 'src/app/orden/orden-detail';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  /**
   * Indica si las ganancias son positivas (true) o negativas (false)
   */
  ganancias: Boolean;

  ordenes: OrdenDetail[];

  cargandoPedidos: Boolean;

  totalGanancias: number;

  gananciasMes: number;

  gananciasMesAnterior: number;

  constructor(private adminService: AdministradorService
  ) { }

  getOrdenes() {
    this.ordenes = [];
    this.adminService.getOrdenes().subscribe(ordenes => {
      this.ordenes = ordenes;
      this.pedidosPorMesInit();
      this.cardsInit();
    });
  }

  cardsInit() {
    this.totalGanancias = 0;
    this.gananciasMes = 0;
    this.gananciasMesAnterior = 0;

    this.ordenes.forEach(orden => {
      console.log(orden);
      console.log(orden.costo);
      console.log(this.totalGanancias);
      this.totalGanancias = this.totalGanancias + orden.costo;

      var fechaComps = orden.fecha.toString().split('/');
      if (fechaComps[2] === "2019") {
        if (fechaComps[1] === "12") {
          this.gananciasMes = this.gananciasMes + orden.costo;
        } else if (fechaComps[1] === "11") {
          this.gananciasMesAnterior += orden.costo;
        }
      }
    });
  }

  /**
   * Carga la gráfica de los pedidos por mes
   */
  pedidosPorMesInit() {
    this.ganancias = true;
    var numbers2019: Array<number> = new Array<number>(12);
    var numbers2018 = new Array<number>(12);
    numbers2019.fill(0);
    numbers2018.fill(0);

    this.ordenes.forEach(orden => {
      var fechaComps = orden.fecha.toString().split('/');
      if (fechaComps[2] === "2019") {
        numbers2019[+fechaComps[1] - 1] = numbers2019[+fechaComps[1] - 1] + 1;
      }
      if (fechaComps[2] === "2018") {
        numbers2018[+fechaComps[1] - 1] = numbers2018[+fechaComps[1] - 1] + 1;
      }
    });
    this.cargandoPedidos = false;

    var chart = new CanvasJS.Chart("pedidosPorMes", {
      animationEnabled: true,
      title: {
        text: "Pedidos Por Mes"
      },
      axisY: {
        title: "Pedidos Realizados",
        valueFormatString: "#0",
      },
      toolTip: {
        shared: true
      },
      legend: {
        cursor: "pointer",
        itemclick: toggleDataSeries
      },
      data: [{
        yValueFormatString: "#,### Units",
        xValueFormatString: "MMM-YYYY",
        name: "Pedidos 2019",
        showInLegend: true,
        type: "spline",
        visible: true,
        dataPoints: [
          { x: new Date(2019, 0), y: numbers2019[0] },
          { x: new Date(2019, 1), y: numbers2019[1] },
          { x: new Date(2019, 2), y: numbers2019[2] },
          { x: new Date(2019, 3), y: numbers2019[3] },
          { x: new Date(2019, 4), y: numbers2019[4] },
          { x: new Date(2019, 5), y: numbers2019[5] },
          { x: new Date(2019, 6), y: numbers2019[6] },
          { x: new Date(2019, 7), y: numbers2019[7] },
          { x: new Date(2019, 8), y: numbers2019[8] },
          { x: new Date(2019, 9), y: numbers2019[9] },
          { x: new Date(2019, 10), y: numbers2019[10] },
          { x: new Date(2019, 11), y: numbers2019[11] }
        ]
      },
      {
        yValueFormatString: "#,### Units",
        xValueFormatString: "MMM-YYYY",
        type: "spline",
        name: "Pedidos 2018",
        showInLegend: true,
        visible: true,
        dataPoints: [
          { x: new Date(2019, 0), y: numbers2018[0] },
          { x: new Date(2019, 1), y: numbers2018[1] },
          { x: new Date(2019, 2), y: numbers2018[2] },
          { x: new Date(2019, 3), y: numbers2018[3] },
          { x: new Date(2019, 4), y: numbers2018[4] },
          { x: new Date(2019, 5), y: numbers2018[5] },
          { x: new Date(2019, 6), y: numbers2018[6] },
          { x: new Date(2019, 7), y: numbers2018[7] },
          { x: new Date(2019, 8), y: numbers2018[8] },
          { x: new Date(2019, 9), y: numbers2018[9] },
          { x: new Date(2019, 10), y: numbers2018[10] },
          { x: new Date(2019, 11), y: numbers2018[11] }
        ]
      }]
    });
    chart.render();

    function toggleDataSeries(e) {
      if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
        e.dataSeries.visible = false;
      }
      else {
        e.dataSeries.visible = true;
      }
      chart.render();
    }
  }

  ngOnInit() {
    this.cargandoPedidos = true;
    this.getOrdenes();
  }
}