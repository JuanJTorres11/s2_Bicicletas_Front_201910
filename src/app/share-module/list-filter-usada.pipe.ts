import { Pipe, PipeTransform } from '@angular/core';
import {Bicicleta} from '../bicicleta/bicicleta';

@Pipe({
  name: 'listFilterUsada'
})
export class ListFilterUsadaPipe implements PipeTransform {

   transform(input: Bicicleta[], criterio:boolean){
    var output: Bicicleta[] = [];
	if(input && input.length){
	 for (var i = 0; i < input.length; i++) {
      if (input[i].usada === criterio) {
        output.push(input[i]);
      }
    }

	}
   
    return output;
  }

}
