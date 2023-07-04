import { getLocaleDateTimeFormat, getLocaleId } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ImageService } from 'src/app/service/image.service';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  [x: string]: any;
  empresa : string;
  puesto: string;
  descripcionEx : string;
  logoimg: string;
  fechaInicio: string;
  actualmente: number = 0;
  fechaFin?: string = '0000-00-00';
  aux_actualmente: boolean = false;
  aux: string;

  constructor(
    private sExperiencia: SExperienciaService,
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
    this.logoimg = this.imageService.url;
    const expe = new Experiencia(this.empresa, this.puesto, this.descripcionEx, this.logoimg, this.fechaInicio, this.actualmente, this.fechaFin);
    this.sExperiencia.save(expe).subscribe(
      data => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló agregar Experiencia");
        this.router.navigate(['']);
      }
    )
  }
  uploadImage($event: any) {
     this.aux = "experiencia_"+this.empresa.replace(/ /g, "")+"_"+this.puesto.replace(/ /g, "");
     const name = this.aux;
    this.imageService.uploadImage($event, name);

  }

}
