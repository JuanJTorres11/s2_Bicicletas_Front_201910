import {Vendedor} from "./vendedor";
import { Mediopago } from "../../mediopago/mediopago";
import { Venta } from "../../Venta/venta";

/**
 * Clase con los medios de pago y ventas
 */
export class VendedorDetail extends Vendedor {

      /**
      * Lista de medios de pago del vendedor 
      * */
     mediosPago:Mediopago[];

     /**
      * Lista de ventas del vendedor
      * */
     ventas: Venta[];
}