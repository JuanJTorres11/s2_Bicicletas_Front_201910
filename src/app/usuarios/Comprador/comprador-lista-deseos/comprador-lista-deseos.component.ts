import {Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bicicleta } from '../../../bicicleta/bicicleta';
import {BicicletaService} from '../../../bicicleta/bicicleta.service';



@Component({
  selector: 'app-comprador-lista-deseos',
  templateUrl: './comprador-lista-deseos.component.html',
  styleUrls: ['./comprador-lista-deseos.component.css']
})
export class CompradorListaDeseosComponent implements OnInit {

  constructor(
  private bicicletaService: BicicletaService,
	 private route: ActivatedRoute

  ) { }
   /**
     * La lista de Bicicletas que se desean mostrar
     */
      @Input() bicicletas: Bicicleta[];

    /**
     * Metodo que retorna todas las bicicletas de la tienda para mostrarlos en la lista
     */
    getBicicletas(): void {
        this.bicicletaService.getBicicletas()
            .subscribe(bicicletas => this.bicicletas = bicicletas);
    }

    /**
     * Metodo que incializa el componente
     */
    ngOnInit() {
		console.log("IntitBicicletas");
		if(this.bicicletas === undefined){
		 this.getBicicletas();
		}
	}

}
