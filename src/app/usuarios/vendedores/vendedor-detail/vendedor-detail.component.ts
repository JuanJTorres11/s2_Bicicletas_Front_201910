import { Component, OnInit, Input } from '@angular/core';
import { VendedorService } from '../vendedor.service';
import { ActivatedRoute } from '@angular/router';
import { VendedorDetail } from '../vendedorDetail';

@Component({
  selector: 'app-vendedor-detail',
  templateUrl: './vendedor-detail.component.html',
  styleUrls: ['./vendedor-detail.component.css']
})
export class VendedorDetailComponent implements OnInit {

   /**
    * The component's constructor
    * @param editorialService The editorial's service
    * @param route The route element which helps to obtain the editorial's id
    * @param toastrService The toastr to show messages to the user
    */
   constructor (
    private vendedorService: VendedorService,
    private route: ActivatedRoute
    ) { }

    /**
     * Vendedor que se mostrará
     */
    @Input() vendedor:VendedorDetail;

    /**
     * Identificador que llega en la ruta
     */
    id:number;

    getVendedorDetail(): void {
      this.vendedorService.getVendedorDetail(this.id).subscribe( (vendedorRemoto) => {
              this.vendedor = vendedorRemoto});
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    if (this.id) { 
      this.vendedor = new VendedorDetail();
      this.getVendedorDetail();
    }
  }

}