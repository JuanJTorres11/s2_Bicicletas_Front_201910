import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VentaReviewComponent } from './venta-review/venta-review.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DashboardComponent,
    VentaReviewComponent],
  exports: [
    DashboardComponent,
    VentaReviewComponent
  ]
})
export class AdministradorModule { }
