export class persona{
  id?: number;
  nombre: string;
  apellido: string;
  descripcion: string;
  imgperfil: string;
  imgbanner: string;

  constructor(nombre: string,apellido: string,img: string,imgbanner: string){
    this.nombre = nombre;
    this.apellido = apellido;
    this.descripcion;
    this.imgperfil = img;
    this.imgbanner = imgbanner;
  }

}
