import { Component, OnInit } from '@angular/core';
import { VendedorDetail } from '../vendedorDetail';
import { VendedorService } from '../vendedor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendedor-list',
  templateUrl: './vendedor-list.component.html',
  styleUrls: ['./vendedor-list.component.css']
})
export class VendedorListComponent implements OnInit {

  constructor(
    private service: VendedorService,
    private route: ActivatedRoute,
    private router: Router) { }

  vendedores: VendedorDetail[];

  getVendedores(): void {
    this.service.getVendedores().subscribe((vendedoresBD) => {
      this.vendedores = vendedoresBD
    });
  }

  /**
   * Método que se ejecuta cuando se crea el componente
   */
  ngOnInit() {
    this.getVendedores();
  }

}