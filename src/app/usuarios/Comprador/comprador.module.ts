import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { BicicletaModule } from '../../bicicleta/bicicleta.module';
import {CompradorService} from './comprador.service';
import {FormsModule} from '@angular/forms';
import { CompradorDetailComponent } from './comprador-detail/comprador-detail.component';
import { CompradorCreateComponent } from './comprador-create/comprador-create.component';
import { CompradorEditComponent } from './comprador-edit/comprador-edit.component';
import {CompradorListComponent} from './comprador-list/comprador-list.component';
import { CompradorCarritoComponent } from './comprador-carrito/comprador-carrito.component';
import { CompradorListaDeseosComponent } from './comprador-lista-deseos/comprador-lista-deseos.component';
import { CompradorProcesoCompraComponent } from './comprador-proceso-compra/comprador-proceso-compra.component';
import { CompradorMediospagoComponent } from './comprador-mediosPago/comprador-mediosPago.component';
import { CompradorOrdenComponent} from './comprador-orden/comprador-orden.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BicicletaModule
    ],
    declarations: [CompradorListComponent, CompradorEditComponent, CompradorDetailComponent, CompradorCreateComponent, CompradorCarritoComponent, CompradorListaDeseosComponent, CompradorProcesoCompraComponent, CompradorMediospagoComponent, CompradorOrdenComponent],
    providers:[CompradorService],
    exports: [CompradorListComponent, CompradorDetailComponent]
})

export class CompradorModule{}