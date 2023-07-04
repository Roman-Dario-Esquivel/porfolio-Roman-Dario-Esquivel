export class Educacion {
  id?: number;
  institucion: string;
  titulacion: string;
  descripcion_edu: string;
  logoimg: string;
  fecha_inicio: string;
  actualmente: number;
  fecha_fin: string;


  constructor(institucion: string,titulacion: string,  descripcion_edu: string, logoimg: string, fecha_inicio: string,actualmente: number, fecha_Fin: string){
      this.institucion = institucion;
      this.titulacion = titulacion;
      this.descripcion_edu = descripcion_edu;
      this.actualmente = actualmente;
      this.logoimg = logoimg;
      this.fecha_inicio = fecha_inicio;
      this.actualmente = actualmente;
      if(actualmente==0){
        this.fecha_fin = fecha_Fin;
      }else{
        this.fecha_fin=fecha_inicio;
      }
  }
}
