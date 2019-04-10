import { Component, OnInit } from '@angular/core';
import { VendedorService } from '../vendedor.service';
import { VendedorDetail } from '../vendedorDetail';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vendedor-edit',
  templateUrl: './vendedor-edit.component.html',
  styleUrls: ['./vendedor-edit.component.css']
})
export class VendedorEditComponent implements OnInit {

  constructor(
    private service: VendedorService,
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService) { }

  /**
     * Vendedor que se mostrará
     */
  vendedor: VendedorDetail;

  /**
   * Identificador que llega en la ruta
   */
  id: number;

  /**
   * Obtiene el vendedor actual
   */
  getVendedorDetail(): void {
    this.service.getVendedorDetail(this.id).subscribe((vendedorRemoto) => {
      this.vendedor = vendedorRemoto
    });
  }

  putVendedor():void {
    this.service.putVendedor(this.id, this.vendedor).subscribe((vendedorRemoto) => {
      this.vendedor = vendedorRemoto
    });
    this.toastrService.success('Se inició sesión correctamente');
    this.router.navigateByUrl('/vendedores/' + this.id);
  }

  /**
   * Método que se ejecuta cuando se crea el componente
   */
  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.vendedor = new VendedorDetail();
      this.getVendedorDetail();
    }
  }

}
