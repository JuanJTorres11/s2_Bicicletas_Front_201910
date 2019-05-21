import { Bicicleta } from '../../bicicleta/bicicleta';


/**
 * clase que representa un item del carrito de un comprador
 */

 export class ItemCarrito
 {

	/**
     * El id del item
     */
	id : number;
     
	 /**
      * La bicicleta
      */
	  bicicleta : Bicicleta;

	   /**
      * La cantidad de bicicletas de la misma referencia que se desean comprar
      */
		cantidad:number;
		


 }