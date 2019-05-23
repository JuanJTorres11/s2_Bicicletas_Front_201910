import { Bicicleta } from "../bicicleta/bicicleta";

/**
* This class represents a venta of s2_bicicletas-Front.
* It contains all the information relevant to the user.
*/
export class Venta {

    /**
     * Atributo que representa la factura.
     */
    factura : String;

    /**
     * Atributo que representa el precio.
     */
    precio : number;

    /**
     * Atributo que representa True si fue aprobado.False de lo contrario.
     */
    aprobado : boolean;

    /**
     * Atributo que representa un arreglo con las fotos de la bicicleta
     * asociada.
     */
    fotos : String[];

    /**
    * Objeto bicicleta a vender. 
    */
     biciclea : Bicicleta;
    
    /**
     * Atributo que representa el id de una venta. 
     */
    id : number;
}