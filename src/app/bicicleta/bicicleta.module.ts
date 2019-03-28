
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {BicicletaService} from './bicicleta.service';
import {BicicletaListComponent} from './bicicleta-list/bicicleta-list.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        BicicletaListComponent
    ],
    providers: [BicicletaService],
    bootstrap: [BicicletaListComponent]
})
export class BicicletaModule {}