import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediopagoListComponent } from './mediopago-list/mediopago-list.component';
import { MediopagoAddComponent } from './mediopago-add/mediopago-add.component';
import { MediopagoDetailComponent } from './mediopago-detail/mediopago-detail.component';
import { MediopagoEditComponent } from './mediopago-edit/mediopago-edit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MediopagoListComponent, MediopagoAddComponent, MediopagoDetailComponent, MediopagoEditComponent]
})
export class MediopagoModule { }
