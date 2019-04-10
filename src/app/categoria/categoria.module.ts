import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { CategoriaAddComponent } from './categoria-add/categoria-add.component';
import { CategoriaDetailComponent } from './categoria-detail/categoria-detail.component';
import { CategoriaService } from './categoria.service';
import { CategoriaEditComponent } from './categoria-edit/categoria-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [CategoriaListComponent, CategoriaAddComponent, CategoriaDetailComponent, CategoriaEditComponent],
  bootstrap: [CategoriaListComponent],
  exports: [ CategoriaListComponent, CategoriaAddComponent ],
  providers: [CategoriaService]
})
export class CategoriaModule { }