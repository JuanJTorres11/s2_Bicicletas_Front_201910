import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { BicicletaModule } from '../../bicicleta/bicicleta.module';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {CompradorService} from './comprador.service';
import {FormsModule} from '@angular/forms';
import { CompradorDetailComponent } from './comprador-detail/comprador-detail.component';
import { CompradorEditComponent } from './comprador-edit/comprador-edit.component';
import { CompradorCarritoComponent } from './comprador-carrito/comprador-carrito.component';
import { CompradorListaDeseosComponent } from './comprador-lista-deseos/comprador-lista-deseos.component';
import { CompradorProcesoCompraComponent } from './comprador-proceso-compra/comprador-proceso-compra.component';
import { CompradorMediospagoComponent } from './comprador-mediosPago/comprador-mediosPago.component';
import { CompradorOrdenComponent} from './comprador-orden/comprador-orden.component';
import { OrdenModule } from '../../orden/orden.module';
import { MediopagoModule } from '../../mediopago/mediopago.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BicicletaModule, 
        OrdenModule, 
        AppRoutingModule,
        MediopagoModule
    ],
    declarations: [
    CompradorEditComponent, 
    CompradorDetailComponent,
    CompradorCarritoComponent, 
    CompradorListaDeseosComponent, 
    CompradorProcesoCompraComponent, 
    CompradorMediospagoComponent, 
    CompradorOrdenComponent],
    
    bootstrap: [CompradorDetailComponent],
    providers:[CompradorService],
    exports: [CompradorDetailComponent, CompradorEditComponent]
})

export class CompradorModule{}
