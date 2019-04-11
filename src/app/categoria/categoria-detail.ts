import { Categoria } from './categoria';
import { Bicicleta } from '../bicicleta/bicicleta';

export class CategoriaDetail extends Categoria {
  /**
   * Bicicletas de la categoria
   */
  bicicletas: Bicicleta[];
}