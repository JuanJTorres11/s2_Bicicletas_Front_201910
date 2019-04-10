import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompradorListComponent} from './comprador-list/comprador-list.component';

import {CompradorService} from './comprador.service';
import {FormsModule} from '@angular/forms';
import { CompradorDetailComponent } from './comprador-detail/comprador-detail.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { CompradorCreateComponent } from './comprador-create/comprador-create.component';

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [
      CompradorDetailComponent,
      VendedorMediospagoComponent,
      VendedorVentaAddComponent,
      VendedorVentaListComponent,
      CompradorEditComponent
    ],
    bootstrap: [CompradorDetailComponent],
    providers: [CompradorService],
    exports: [CompradorDetailComponent]
  })
  export class CompradorModule { }