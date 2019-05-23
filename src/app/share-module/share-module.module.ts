import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule }        from '@angular/common';

import { ListFilterUsadaPipe } from './list-filter-usada.pipe';
import { ListFilterReferPipe } from './list-filter-refer.pipe';
import { ListFilterPrecioPipe } from './list-filter-precio.pipe';
import { ListFilterDesPipe } from './list-filter-des.pipe';


@NgModule({
  
   imports:      
   [ CommonModule ],

  declarations: 
  [ ListFilterUsadaPipe, 
  ListFilterReferPipe,
  ListFilterPrecioPipe,
  ListFilterDesPipe],

  exports:      
  [ ListFilterUsadaPipe, 
  ListFilterReferPipe,
  ListFilterPrecioPipe,
  ListFilterDesPipe]
})
export class SharedModule {
  
}