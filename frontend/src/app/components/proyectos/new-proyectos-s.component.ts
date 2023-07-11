import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosSService } from 'src/app/service/proyectos-s.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-new-proyectos-s',
  templateUrl: './new-proyectos-s.component.html',
  styleUrls: ['./new-proyectos-s.component.css']
})
export class NewProyectosSComponent {
  nombreProyecto: string;
  descripcionProyecto: string;
  enlaceProyecto: string;
  ImgProyecto: string;
  aux: string;


  constructor(private proy: ProyectosSService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imageService: ImageService
    ) { }
  ngOnInit(): void {
    this.imageService.url=null;
    this.imageService.loading = false;
  }

  onCreate(): void{
    if(this.imageService.url.includes(this.aux)){
      this.ImgProyecto = this.imageService.url;
    }
    else {
      this.ImgProyecto ="vacio";
    }

    const proyec = new Proyectos(this.nombreProyecto,this.descripcionProyecto,this.enlaceProyecto,this.ImgProyecto);
    this.proy.save(proyec).subscribe(
      data => {
        alert("Proyecto creado correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo al añadir el Proyecto");
        this.router.navigate(['']);
      }
    )
  }
  uploadImage($event: any) {
    this.aux ="proyecto_"+this.nombreProyecto.replace(/ /g, "");
    const name = this.aux;
    this.imageService.loading = true;
    this.imageService.uploadImage($event, name);

  }
}
