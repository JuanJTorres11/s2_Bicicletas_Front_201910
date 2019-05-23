/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 import { Categoria } from '../categoria/categoria';
 import { Marca } from '../marca/marca';
 import { Orden } from '../orden/orden';

export class Bicicleta{
   
        
	/**
     * El id de la bicicleta
     */
	 id : number;

	 /**
     * La calificacion promedio de la bicicleta
     */
	 calificacion : number;
    /**
     * La descripcion de la bicicleta
     */
    descripcion : string;

    /**
     * La referencia de la bicicleta
     */
    referencia : string;

    /**
     * El precio de la bicicleta
     */
    precio : number;

     /**
     * Indica si la bicicleta es usada o no
     */
    usada : boolean;

     /**
     * Indica la cantidad de bicicletas disponibles en la tienda
     */
    stock : number;

    /**
     * Las rutas de las imagenes de la bicicleta
     */
    album : string[];



    /**
     * La marca de la bicicleta
     */
    marca : Marca;
	

     /**
     * LA categoria de la bicicleta
     */
    categoria : Categoria;
	
     
    /**
     * La orden asociada a la bicicleta
     */
    orden : Orden;

	descuento : number;
	
    
    
}
