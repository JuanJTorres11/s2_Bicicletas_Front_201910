import { Component, OnInit } from '@angular/core';
import { VendedorService } from '../vendedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendedor-mediospago',
  templateUrl: './vendedor-mediospago.component.html',
  styleUrls: ['./vendedor-mediospago.component.css']
})
export class VendedorMediospagoComponent implements OnInit {

  constructor(
    private service: VendedorService,
    private router: Router) { }

  id: number;

  mediosPago = ["Visa terminada en 4910", "MasterCard terminada en 7903", "Visa terminada en 5674"];

  getMediosPago() {
    this.service.getVendedorMediosPago(this.id).subscribe(mediosPago => {

    });
  }
  
  redirectMedioPago() {
    this.router.navigateByUrl('/MediosPago/');
  }

  ngOnInit() {
    this.id = parseInt(localStorage.getItem('id'));
    this.getMediosPago();
  }
}