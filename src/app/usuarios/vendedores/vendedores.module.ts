import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendedorDetailComponent } from './vendedor-detail/vendedor-detail.component';
import { VendedorMediospagoComponent } from './vendedor-mediospago/vendedor-mediospago.component';
import { VendedorVentaComponent } from './vendedor-venta/vendedor-venta.component';
import { VendedorEditComponent } from './vendedor-edit/vendedor-edit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VendedorDetailComponent, VendedorMediospagoComponent, VendedorVentaComponent, VendedorEditComponent]
})
export class VendedoresModule { }
