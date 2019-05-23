import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendedoresModule } from './vendedores/vendedores.module';
import { CompradorModule } from './comprador/comprador.module';
import { AdministradorModule } from './administrador/administrador.module';

@NgModule({
  imports: [
    CommonModule,
    VendedoresModule,
    CompradorModule,
    AdministradorModule
  ]
})
export class UsuariosModule { }
