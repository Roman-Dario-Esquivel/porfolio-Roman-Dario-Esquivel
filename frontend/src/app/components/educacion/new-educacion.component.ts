import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  descripcionE: string;
  actualmente: number = 0;
  nombreTitulacion: string;
  institucion: string;
  logoimg: string;
  fechaInicio: string;
  fechaFin?: string;
  aux_actualmente: boolean = false;
  aux: string;


  constructor(private educacionS: EducacionService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imageService: ImageService
    ) { }


  ngOnInit(): void {
    this.imageService.url=null;
  }
  onCreate(): void {
    if(this.aux_actualmente){
      this.actualmente = 1;
    }
    if(this.imageService.url.includes(this.aux)){
      this.logoimg = this.imageService.url;
    }
    else {
      this.logoimg ="vacio";
    }
    const educacion = new Educacion( this.institucion,this.nombreTitulacion, this.descripcionE, this.logoimg, this.fechaInicio, this.actualmente, this.fechaFin);
    this.educacionS.save(educacion).subscribe(
      data => {
        alert("Educacion añadida correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("falló agregar Educacion");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event: any) {
    this.aux = "educacion_"+this.institucion.replace(/ /g, "")+"_"+this.nombreTitulacion.replace(/ /g, "");
    const name = this.aux;
    this.imageService.uploadImage($event, name);
  }
}

