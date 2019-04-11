import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendedoresModule } from './vendedores/vendedores.module';
import { CompradorModule } from './comprador/comprador.module';

@NgModule({
  imports: [
    CommonModule,
    VendedoresModule, 
    CompradorModule
  ],
  declarations: []
})
export class UsuariosModule { }
