export class Mediopago {
    /**
     * Numero de la tarjeta
     */
    numeroTarjeta: number;
  
    /**
     * Codigo de verificacion
     */
    codigoVerificacion: number;
  
    /**
     * Fecha de vencimiento de la tarjeta
     */
    vencimiento: string;
  
    /**
     * Direccion de facturacion
     */
    direccion: string;
  
    /**
     * Tipo de tarjeta
     * { Debito, Credito }
     */
    tipoTarjeta: string
  
    /**
     * Tipo de credito
     * { VISA, MASTERCARD }
     */
    tipoCredito: string
  
    /**
     * Ruta de la imagen
     */
    imagen: string
  
    /**
     * Numero de tarjeta codificado
     */
    numeroCodificado: number
  }