import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MarcaListComponent} from './marca-list/marca-list.component';

import {MarcaService} from './marca.service';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [MarcaListComponent],
    providers:[MarcaService],
    exports: [MarcaListComponent]
})

export class MarcaModule{}