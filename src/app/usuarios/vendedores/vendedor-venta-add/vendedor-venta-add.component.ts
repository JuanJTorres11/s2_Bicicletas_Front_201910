import { Component, OnInit } from '@angular/core';
import { VendedorService } from '../vendedor.service';

@Component({
  selector: 'app-vendedor-venta-add',
  templateUrl: './vendedor-venta-add.component.html',
  styleUrls: ['./vendedor-venta-add.component.css']
})
export class VendedorVentaAddComponent implements OnInit {

  constructor(service:VendedorService) { }

  album:string [] = ["prueba1"];

  ngOnInit() {
  }

}
