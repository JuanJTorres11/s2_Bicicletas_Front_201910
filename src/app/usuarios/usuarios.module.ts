import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendedoresModule } from './vendedores/vendedores.module';
import { CompradorModule } from './Comprador/Comprador.module';

@NgModule({
  imports: [
    CommonModule,
    VendedoresModule,
    CompradorModule
  ],
  declarations: []
})
export class UsuariosModule { }
