import { Component } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosSService } from 'src/app/service/proyectos-s.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-edit-proyectos-s',
  templateUrl: './edit-proyectos-s.component.html',
  styleUrls: ['./edit-proyectos-s.component.css']
})
export class EditProyectosSComponent {
  proyec: Proyectos = null;
  aux: string;

  constructor(
    private sProyecto: ProyectosSService,
     private activatedRouter: ActivatedRoute,
    private router: Router,
    public imageService: ImageService
    ) { }

  ngOnInit(): void {
    this.imageService.url=null;
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.detail(id).subscribe(
      data =>{
        this.proyec = data;
      }, err =>{
        alert("Error al modificar proyecto");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    if(this.imageService.url!=null){
      this.proyec.imgProyecto = this.imageService.url;
    }

    this.sProyecto.update(id, this.proyec).subscribe(
      data => {
        alert("Modificado proyecto");
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar experiencia");
         this.router.navigate(['']);
      }
    )
  }
  uploadImage($event: any) {
    this.aux ="proyecto_"+this.proyec.nombreProyecto.replace(/ /g, "");
    const name = this.aux;
    this.imageService.uploadImage($event, name);

  }
}
