/**
* This class represents a user of s2_bicicletas-Front.
* It contains all the information relevant to the user.
*/
export class Usuario {

    /**
     * Identificador del usuario
     */
    id: number;

    /**
     * Nombre del usuario
     */
    nombre: string;

    /**
     *  Login (correo) del usuario
     */
    login: string;

    /**
     * Clave del usuario
     */
    password: string;

    /**
     * Rol del usuario {Vendedor|Comprador}
     */
    rol: string;   
}