import { Pipe, PipeTransform } from '@angular/core';
import {Bicicleta} from '../bicicleta/bicicleta';

@Pipe({
  name: 'listFilterPrecio'
})
export class ListFilterPrecioPipe implements PipeTransform {

  
   transform(input: Bicicleta[], criterio:number, criterio2:number){
    var output: Bicicleta[] = [];
	if(input && input.length){
	 for (var i = 0; i < input.length; i++) {
      if (input[i].precio >= criterio && input[i].precio <= criterio2) {
        output.push(input[i]);
      }
    }

	}
   
    return output;
  }

}
