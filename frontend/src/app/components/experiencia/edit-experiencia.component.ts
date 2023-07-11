import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ImageService } from 'src/app/service/image.service';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';


@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  expLab: Experiencia = null;
  aux_actualmente: boolean = false;


  constructor(
    private sExperiencia: SExperienciaService,
     private activatedRouter: ActivatedRoute,
    private router: Router,
    public imageService: ImageService
    ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.imageService.url=null;
    this.imageService.loading =false;
    this.sExperiencia.detail(id).subscribe(
      data =>{
        this.expLab = data;
        this.aux_actualmente = Boolean(this.expLab.actualmente);
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{

    const id = this.activatedRouter.snapshot.params['id'];
    if(this.aux_actualmente){
      this.expLab.actualmente = 1;
    }else{
      this.expLab.actualmente = 0;
    }
    if(this.imageService.url!=null){
      this.expLab.logo = this.imageService.url;
    }
    this.sExperiencia.update(id, this.expLab).subscribe(
      data => {
        alert("se modifico correctamente experiencia");
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar experiencia");
         this.router.navigate(['']);
      }
    )
  }

  uploadImage($event: any) {
    const name = "experiencia_"+this.expLab.empresa.replace(/ /g, "")+"_"+this.expLab.puesto.replace(/ /g, "");
    this.imageService.loading = true;
    this.imageService.uploadImage($event, name);
  }

}

