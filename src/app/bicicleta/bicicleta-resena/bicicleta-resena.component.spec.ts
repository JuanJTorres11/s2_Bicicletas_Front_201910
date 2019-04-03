import { Component, OnInit, Input, } from '@angular/core';
import { BicicletaService } from '../bicicleta.service';
import { Resena } from '../resena';

@Component({
    selector: 'app-bicicleta-resena',
    templateUrl: './bicicleta-resena.component.html',
})
export class BicicletaResenaComponent implements OnInit {
    @Input() bicicletaResenas : Resena [];
    public isCollapsed = true;
    
    ngOnInit(){
        
    }
}