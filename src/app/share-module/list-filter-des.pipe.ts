import { Pipe, PipeTransform } from '@angular/core';
import {Bicicleta} from '../bicicleta/bicicleta';

@Pipe({
  name: 'listFilterDes'
})
export class ListFilterDesPipe implements PipeTransform { 

  
   transform(input: Bicicleta[]){
    var output: Bicicleta[] = [];
	if(input && input.length){
	 for (var i = 0; i < input.length; i++) {
      if (input[i].descuento != undefined && input[i].descuento > 0) {
        output.push(input[i]);
      }
    }

	}
   
    return output;
  }

}
