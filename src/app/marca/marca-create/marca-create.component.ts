import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import{MarcaService} from '../marca.service';
import { ToastrService } from 'ngx-toastr';
import{Marca} from '../marca';

@Component({
  selector: 'app-marca-create',
  templateUrl: './marca-create.component.html',
  styleUrls: ['./marca-create.component.css']
})
export class MarcaCreateComponent implements OnInit {

  constructor(
    private marcaService: MarcaService,
    private toastrService: ToastrService
  ) { }

  /**
   * La nueva marca
   */
  marca: Marca

  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();

  createMarca(): Marca {
    this.marcaService.createMarca(this.marca)
    .subscribe((marca) => {
        this.marca = marca;
        this.create.emit();
        this.toastrService.success("La marca fue creada", "Creacion de marca");     
    });
    return this.marca;
  }

  cancelCreation(): void {
    this.cancel.emit();
}

  ngOnInit() {
    this.marca=new Marca();
  }

}
