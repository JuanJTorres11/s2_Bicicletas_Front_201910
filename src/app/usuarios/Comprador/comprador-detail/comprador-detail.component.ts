import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompradorService } from '../comprador.service';
import { CompradorDetail } from '../comprador-detail';

@Component({
    selector: 'app-comprador-detail',
    templateUrl: './comprador-detail.component.html',
    styleUrls: ['./comprador-detail.component.css']
})
export class CompradorDetailComponent implements OnInit {

    /**
     * The component's constructor
     * @param compradorService The comprador's service
     * @param router The route element which helps to obtain the comprador's id
     * @param toastrService The toastr to show messages to the user
     */
    constructor(
        private compradorService: CompradorService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    /**
    * El id del author que viene en el path get .../compradores/id
   */
    comprador: CompradorDetail;

    /**
   * Identificador que llega en la ruta
   */
    id: number;

    getCompradorDetail(): void {
        this.compradorService.getCompradorDetail(this.id).subscribe((compradorRemoto) => {
          this.comprador = compradorRemoto
        });
      }

      getMediosPago () {
        this.router.navigateByUrl('/compradores/mediosPago');
      }
    
      ngOnInit() {
        this.id = +this.route.snapshot.paramMap.get('id');
        if (this.id) {
          this.comprador = new CompradorDetail();
          this.getCompradorDetail();
        }
      }




}