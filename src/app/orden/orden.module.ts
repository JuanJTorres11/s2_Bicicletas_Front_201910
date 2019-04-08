import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrdenListComponent} from './orden-list/orden-list.component';

import {OrdenService} from './orden.service';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { OrdenDetailComponent } from './orden-detail/orden-detail.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [OrdenListComponent, OrdenDetailComponent],
    providers:[OrdenService],
    exports: [OrdenListComponent]
})

export class OrdenModule{}