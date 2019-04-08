import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import {Orden} from '../orden';
import { OrdenService } from '../orden.service';
import { OrdenDetail } from '../orden-detail';


@Component({
  selector: 'app-orden-detail',
  templateUrl: './orden-detail.component.html',
  styleUrls: ['./orden-detail.component.css']
})
export class OrdenDetailComponent implements OnInit {

  constructor(
    private ordenService: OrdenService,
    private route: ActivatedRoute
  ) { }

  ordenDetail: OrdenDetail;

  @Input() orden_id: number;

  loader: any;

  getOrdenDetail(): void {
    this.ordenService.getOrdenDetail(this.orden_id)
    .subscribe(o => {
        this.ordenDetail = o
    })
  }

  onLoad(params){
    this.orden_id= parseInt(params['id']);
    this.ordenDetail = new OrdenDetail();
    this.getOrdenDetail();
  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params:Params) => this.onLoad(params));
  }

  ngOnDestroy(): void {
    this.loader.unsubscribe();
  }

}
