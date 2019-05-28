import {Comprador} from "./comprador";
import { Mediopago } from "../../mediopago/mediopago";
import { Orden } from "../../orden/orden";
import { Bicicleta} from "../../bicicleta/bicicleta";

/**
 * Clase con los medios de pago y ordenes
 */
export class CompradorDetail extends Comprador {

      /**
      * Lista de medios de pago del comprador 
      */
     mediosPago:Mediopago[];

           /**
      * Lista de medios de pago del comprador 
      */
     ordenes:Orden[];

     /**
      * Lista de bicicletas del carrito del comprador
      */
     carrito: Bicicleta[];
}