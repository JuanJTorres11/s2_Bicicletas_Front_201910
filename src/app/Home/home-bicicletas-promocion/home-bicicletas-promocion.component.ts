import {Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bicicleta } from '../../bicicleta/bicicleta';
import { BicicletaService } from '../../bicicleta/bicicleta.service';


@Component({
  selector: 'app-home-bicicletas-promocion',
  templateUrl: './home-bicicletas-promocion.component.html',
  styleUrls: ['./home-bicicletas-promocion.component.css']
})
export class HomeBicicletasPromocionComponent implements OnInit {

  constructor(
  	private bicicletaService: BicicletaService,
		 private route: ActivatedRoute
  ) { }

  /**
     * La lista de Bicicletas que se desean mostrar
  */
  @Input() bicicletas: Bicicleta[];

  /**
   * Obtiene las bicicletas ???
  */
  getBicicletas() {
    this.bicicletaService.getBicicletas()
      .subscribe(bicicletas => {
        this.bicicletas = bicicletas;
        console.log(bicicletas);
      });
  }


  ngOnInit() {

  if(this.bicicletas === undefined) {
      this.bicicletas = [];
    }
    this.getBicicletas();
  }

}
