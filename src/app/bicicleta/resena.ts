/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 import {Bicicleta} from "./bicicleta";

export class Resena {
    
    
	/**
     * El id de la reseña
     */
    id : number;

    /**
     * La descripcion de la reseña
     */
    descripcion : string;

    /**
     * La calificacion de la reseña
     */
    calificacion : number;

    /**
     * El titulo de la reseña
     */
   titulo : string;

    /*
    * Nombre usuario calificador
     */
    usuario: string;

    /*
    * Relación a una bicicleta
    * dado que esta tiene cardinalidad 1.
     */
   bicicleta : Bicicleta;
}
