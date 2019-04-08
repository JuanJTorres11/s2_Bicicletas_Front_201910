import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrdenListComponent} from './orden-list/orden-list.component';

import {OrdenService} from './orden.service';
import {FormsModule} from '@angular/forms';
import { OrdenDetailComponent } from './orden-detail/orden-detail.component';
import { OrdenCreateComponent } from './orden-create/orden-create.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [OrdenListComponent, OrdenDetailComponent, OrdenCreateComponent],
    providers:[OrdenService],
    exports: [OrdenListComponent]
})

export class OrdenModule{}