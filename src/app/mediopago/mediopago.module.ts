import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MediopagoListComponent } from './mediopago-list/mediopago-list.component';
import { MediopagoAddComponent } from './mediopago-add/mediopago-add.component';
import { MediopagoDetailComponent } from './mediopago-detail/mediopago-detail.component';
import { MediopagoEditComponent } from './mediopago-edit/mediopago-edit.component';
import { MediopagoDeleteComponent } from './mediopago-delete/mediopago-delete.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MediopagoListComponent, MediopagoAddComponent, MediopagoDetailComponent, MediopagoEditComponent, MediopagoDeleteComponent],
  bootstrap: [MediopagoListComponent],
  exports: [MediopagoListComponent, MediopagoDetailComponent]
})
export class MediopagoModule { }
