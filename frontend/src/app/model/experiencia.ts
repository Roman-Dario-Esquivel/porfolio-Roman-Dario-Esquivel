export class Experiencia {
  id? : number;
  empresa : string;
  puesto: string;
  descripcion : string;
  logo: string;
  fecha_inicio: string;
  actualmente: number;
  fecha_fin?: string;


  constructor( empresa: string, puesto: string, descripcion: string,logoimg: string,  fecha_inicio: string,actualmente: number, fecha_fin: string){

      this.empresa = empresa;
      this.puesto = puesto;
      this.descripcion = descripcion;
      this.logo = logoimg;
      this.fecha_inicio = fecha_inicio;
      this.actualmente = actualmente;
      if(actualmente==0){
        this.fecha_fin = fecha_fin;
      }
      else this.fecha_fin = fecha_inicio;
  }
}
