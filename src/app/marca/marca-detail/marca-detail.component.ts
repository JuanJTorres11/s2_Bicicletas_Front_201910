import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import {Marca} from '../marca';
import { MarcaService } from '../marca.service';
import { MarcaDetail } from '../marca-detail';

@Component({
  selector: 'app-marca-detail',
  templateUrl: './marca-detail.component.html',
  styleUrls: ['./marca-detail.component.css']
})
export class MarcaDetailComponent implements OnInit {

  constructor(
    private marcaService: MarcaService,
    private route: ActivatedRoute
  ) { }

  marcaDetail: MarcaDetail;

  @Input() marca_id: number;

  loader: any;

  getMarcaDetail(): void {
    this.marcaService.getMarcaDetail(this.marca_id)
    .subscribe(o => {
        this.marcaDetail = o
    })
  }

  onLoad(params){
    this.marca_id= parseInt(params['id']);
    this.marcaDetail = new MarcaDetail();
    this.getMarcaDetail();
  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params:Params) => this.onLoad(params));
  }

  ngOnDestroy(): void {
    this.loader.unsubscribe();
  }

}
