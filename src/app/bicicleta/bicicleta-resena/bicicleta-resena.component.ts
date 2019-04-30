import { Component, OnInit, Input, } from '@angular/core';
import { Resena } from '../resena';

@Component({
    selector: 'app-bicicleta-resena',
    templateUrl: './bicicleta-resena.component.html',
	styleUrls: ['./bicicleta-resena.component.css']
})
export class BicicletaResenaComponent implements OnInit {
    
	@Input() bicicletaResenas: Resena [];
    
    public isCollapsed = true;
    


    /**
	 * La funcion que se llama cuando se publica una reseña para actualizar las reseñas
     */
    updateResenas(resenas:Resena[]): void {
        this.bicicletaResenas = resenas;
    }
		
    ngOnInit(){
    }
}