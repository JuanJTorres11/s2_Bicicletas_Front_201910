/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 import { Resena } from './resena';
 import { Bicicleta } from './bicicleta';

 
/**
*Clase que representa una  bicicleta
* Contiene la informacion de cardinalidad mayor a 1
*/
 export class BicicletaDetail extends Bicicleta {
   
    /**
    * Las resenas de la bicicleta
    */
    resenas: Resena[];
 
 }

