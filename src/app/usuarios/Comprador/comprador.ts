/**
 * clase que representa un comprador de la tienda
 */
import { Usuario } from "../usuario";

const tipo:string = 'Comprador';

 export class Comprador extends Usuario
 {
     /**
      * Represta al tipo de usuario que corresponde.
      */
    rol = tipo;
 }