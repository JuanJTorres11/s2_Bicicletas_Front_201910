import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendedor-venta-list',
  templateUrl: './vendedor-venta-list.component.html',
  styleUrls: ['./vendedor-venta-list.component.css']
})
export class VendedorVentaListComponent implements OnInit {

  constructor() { }

  ventas:any[];
  
  ngOnInit() {
  }

}
