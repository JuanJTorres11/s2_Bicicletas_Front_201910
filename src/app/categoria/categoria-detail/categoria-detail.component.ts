import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CategoriaDetail } from '../categoria-detail';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'categoria-detail',
  templateUrl: './categoria-detail.component.html',
  styleUrls: ['./categoria-detail.component.css']
})
export class CategoriaDetailComponent implements OnInit {

  categoriaDetail: CategoriaDetail;
  @Input() nombre: string;
  loader: any;

  constructor(private categoriaService: CategoriaService,
              private route: ActivatedRoute          
  ) { }

  getCategoriaDetail() {
    this.categoriaDetail = new CategoriaDetail();
    this.categoriaService.getCategoriaDetail(this.nombre)
      .subscribe(categoriaDetail => {
        this.categoriaDetail = categoriaDetail;
      });
  }

  ngOnInit() {
    this.getCategoriaDetail();
  }

}