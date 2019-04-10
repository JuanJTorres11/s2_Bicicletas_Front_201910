import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { CategoriaAddComponent } from './categoria-add/categoria-add.component';
import { CategoriaDetailComponent } from './categoria-detail/categoria-detail.component';
import { CategoriaService } from './categoria.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CategoriaListComponent, CategoriaAddComponent, CategoriaDetailComponent],
  bootstrap: [CategoriaListComponent],
  exports: [ CategoriaListComponent, CategoriaAddComponent ],
  providers: [CategoriaService]
})
export class CategoriaModule { }