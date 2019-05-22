import { Component, OnInit, Input } from '@angular/core';
import { MarcaService } from '../marca.service';
import { Bicicleta } from '../../bicicleta/bicicleta';

@Component({
  selector: 'app-marca-bicicleta',
  templateUrl: './marca-bicicleta.component.html',
  styleUrls: ['./marca-bicicleta.component.css']
})
export class MarcaBicicletaComponent implements OnInit {

  
  /**
   * Nombre de la marca.
   */
  @Input() idMarca: number;

  bicicletas: Bicicleta[];

  constructor(private marcaService: MarcaService) { }

  /**
   * Obtiene las bicicletas de la marca con el nombre dado.
   * @param nombreMarca Nombre de la marca.
   */
  getBicicletas(idMarca: number) {
    this.marcaService.getMarcaBicicletas(idMarca)
      .subscribe(b => {
        this.bicicletas = b;
      });
  }

  getMarcaBicicletas() {
    this.getBicicletas(this.idMarca);
  }

  ngOnInit() {
    if(this.bicicletas === undefined) {
      this.bicicletas = [];
    }
    this.getMarcaBicicletas();
  }

}
