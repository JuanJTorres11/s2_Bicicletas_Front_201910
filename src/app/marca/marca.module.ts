import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MarcaListComponent} from './marca-list/marca-list.component';

import {MarcaService} from './marca.service';
import {FormsModule} from '@angular/forms';
import { MarcaDetailComponent } from './marca-detail/marca-detail.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { MarcaCreateComponent } from './marca-create/marca-create.component';
import { MarcaEditComponent } from './marca-edit/marca-edit.component';
import { MarcaDeleteComponent } from './marca-delete/marca-delete.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [MarcaListComponent, MarcaDetailComponent, MarcaCreateComponent, MarcaEditComponent, MarcaDeleteComponent],
    providers:[MarcaService],
    exports: [MarcaListComponent]
})

export class MarcaModule{}