import { Pipe, PipeTransform } from '@angular/core';
import {Bicicleta} from '../bicicleta/bicicleta';

@Pipe({
  name: 'listFilterRefer'
})
export class ListFilterReferPipe implements PipeTransform {

  
  transform(list: Bicicleta[], filterText: string): any {
    console.log(filterText);
    return list ? list.filter(t => t.referencia.search(new RegExp(filterText, 'i')) > -1) : [];
  }


}
