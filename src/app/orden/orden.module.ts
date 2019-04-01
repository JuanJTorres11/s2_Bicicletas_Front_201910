import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrdenListComponent} from './orden-list/orden-list.component';

import {OrdenService} from './orden.service';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [OrdenListComponent],
    providers:[OrdenService],
    exports: [OrdenListComponent]
})

export class OrdenModule{}