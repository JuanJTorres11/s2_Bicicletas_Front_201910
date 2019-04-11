/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 import {Bicicleta} from "./bicicleta";

export class Resena {
    
    
	/**
     * El id de la rese�a
     */
    id : number;

    /**
     * La descripcion de la rese�a
     */
    descripcion : string;

    /**
     * La calificacion de la rese�a
     */
    calificacion : number;

    /**
     * El titulo de la rese�a
     */
   titulo : string;

    /*
    * Nombre usuario calificador
     */
    usuario: string;

    /*
    * Relaci�n a una bicicleta
    * dado que esta tiene cardinalidad 1.
     */
   bicicleta : Bicicleta;
}
