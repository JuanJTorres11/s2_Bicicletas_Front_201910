import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { MarcaService } from '../marca.service';

declare var $: any;

@Component({
  selector: 'app-marca-delete',
  templateUrl: './marca-delete.component.html',
  styleUrls: ['./marca-delete.component.css']
})
export class MarcaDeleteComponent implements OnInit {

  constructor(
    private marcaService: MarcaService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  /**
  *El id de la bicicleta
  */
 @Input()marca_id: number;

 /**
   * El Event Emitter que envia la senal cuando se elimina una marca
   * para que se refresque la lista de resenas
   */
  @Output() updateMarcas = new EventEmitter();

  toggle(): void {

    $('#eliminar'+this.marca_id).modal();
}

hide(): void{
  $('#eliminar'+this.marca_id).modal('hide')
}

/**
    * Eliminar una marca
    */
   deleteMarca(): void {
	      this.marcaService.deleteMarca(this.marca_id)
            .subscribe(() => {
			    this.updateMarcas.emit();
                this.router.navigate(['./marcas/list']);
				this.hide();
                this.toastrService.success("La marca fue borrada", 'Eliminacion de marca');
            }, err => {
                this.toastrService.error(err, 'Error');
            });
    }

  ngOnInit() {
  }

}
