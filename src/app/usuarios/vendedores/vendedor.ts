import { Usuario } from "../usuario";

const tipo:string = 'Vendedor';

/**
 * Clase de vendedor
 */
export class Vendedor extends Usuario {

     /**
      * Telefono del vendedor.
      */
     telefono:number;

     rol = tipo;
}