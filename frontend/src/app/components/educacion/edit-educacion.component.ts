import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { ActivatedRoute, Router } from '@angular/router';
import { EducacionService } from 'src/app/service/educacion.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  educacion: Educacion = null;
  aux_actualmente: boolean = false;
  constructor(
    private educacionS: EducacionService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imageService: ImageService,
  ) { }


  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.imageService.url=null;
    this.imageService.loading= false;
    this.educacionS.detail(id).subscribe(
      data =>{
        this.educacion = data;
        this.aux_actualmente = Boolean(this.educacion.actualmente);
      }, err =>{
         alert("Error al modificar Educacion");
         this.router.navigate(['']);
      }
    )
  }
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    if(this.aux_actualmente){
      this.educacion.actualmente = 1;
    }else{
      this.educacion.actualmente = 0;
    }
    if(this.imageService.url != null){
      this.educacion.logoimg = this.imageService.url;
    }
    this.educacion.logoimg = this.imageService.url;
    this.educacionS.update(id, this.educacion).subscribe(
      data => {
        alert("Educacion modificada correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la Educacion");
        this.router.navigate(['']);
      }
    )
  }
  uploadImage($event: any) {
    const name = "experiencia_"+this.educacion.institucion.replace(/ /g, "")+"_"+this.educacion.titulacion.replace(/ /g, "");
    this.imageService.loading = true;
    this.imageService.uploadImage($event, name);
  }
}

