import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPermissionsModule } from 'ngx-permissions';

import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { CategoriaAddComponent } from './categoria-add/categoria-add.component';
import { CategoriaDetailComponent } from './categoria-detail/categoria-detail.component';
import { CategoriaService } from './categoria.service';
import { CategoriaEditComponent } from './categoria-edit/categoria-edit.component';

import { BicicletaModule } from '../bicicleta/bicicleta.module';
import { CategoriaBicicletaComponent } from './categoria-bicicleta/categoria-bicicleta.component';
import { CategoriaDeleteComponent } from './categoria-delete/categoria-delete.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BicicletaModule,
    NgxPermissionsModule
  ],
  declarations: [CategoriaListComponent, CategoriaAddComponent, CategoriaDetailComponent, CategoriaEditComponent, CategoriaBicicletaComponent, CategoriaDeleteComponent],
  bootstrap: [CategoriaListComponent],
  exports: [ CategoriaListComponent, CategoriaAddComponent ],
  providers: [CategoriaService]
})
export class CategoriaModule { }
