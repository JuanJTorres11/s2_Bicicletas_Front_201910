import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'categoria-edit',
  templateUrl: './categoria-edit.component.html',
  styleUrls: ['./categoria-edit.component.css']
})
export class CategoriaEditComponent implements OnInit {

  /**
   * Nombre de la categoria
   */
  @Input() nombre: string;

  constructor() { }

  ngOnInit() {
  }

}
