import {Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Bicicleta} from '../../../bicicleta/bicicleta';

import {ItemCarrito} from '../itemCarrito';

@Component({
  selector: 'app-comprador-carrito',
  templateUrl: './comprador-carrito.component.html',
  styleUrls: ['./comprador-carrito.component.css']
})
export class CompradorCarritoComponent implements OnInit {

  constructor(
   private route: ActivatedRoute
	
  ) { }

	/**
     * El carrito del comprador
     */
      @Input() carrito: ItemCarrito[];

	  total:number;


  ngOnInit() {
  }

}
