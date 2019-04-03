
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {BicicletaService} from './bicicleta.service';
import {BicicletaListComponent} from './bicicleta-list/bicicleta-list.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {BicicletaDetailComponent} from './bicicleta-detail/bicicleta-detail.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        BicicletaListComponent,
		BicicletaDetailComponent
    ],
    providers: [BicicletaService],
    exports: [BicicletaListComponent]
})
export class BicicletaModule {}