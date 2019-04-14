
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import {VentaService} from './venta.service';
// import {VentaListComponent} from './venta-list/venta-list.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {VentaCreateComponent} from './venta-create/venta-create.component';
import {VentaEditComponent} from './venta-edit/venta-edit.component';




@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule
    ],
    declarations: [
        // VentaListComponent,
		VentaCreateComponent, 
        VentaEditComponent
    ],
    providers: [VentaService],
    // exports: [VentaListComponent]
})
export class VentaModule {}