export class Proyectos {
  id?: number;
  nombreProyecto: string;
  descripcionProyecto: string;
  enlaceProyecto: string;
  imgProyecto: string;

constructor(nombreProyecto: string,DescripcionProyecto: string,EnlaceProyecto: string,ImgProyecto: string){
this.nombreProyecto = nombreProyecto;
this.descripcionProyecto = DescripcionProyecto;
this.enlaceProyecto = EnlaceProyecto;
this.imgProyecto = ImgProyecto;

}

}
