
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { BicicletaModule } from '../bicicleta/bicicleta.module';

import {HomeComponent} from './home-main/home.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { HomeBicicletasPromocionComponent } from './home-bicicletas-promocion/home-bicicletas-promocion.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
		BicicletaModule
    ],
    declarations: [
        HomeComponent,
        HomeBicicletasPromocionComponent
    ],
   
    bootstrap: [HomeComponent]
})
export class HomeModule {}

