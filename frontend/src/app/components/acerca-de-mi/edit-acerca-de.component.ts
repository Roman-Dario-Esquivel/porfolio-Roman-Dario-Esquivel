import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {
  persona: persona = null;
  name: string= " ";

  constructor(private activatedRouter: ActivatedRoute,
    private personaService: PersonaService,
    private router: Router,
    public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.imageService.auxbanner = null;
    this.imageService.auxperfil = null;
    this.imageService.loading =false;


    this.personaService.detail(id).subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }
  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    if(this.imageService.auxperfil!=null){
      this.persona.imgperfil = this.imageService.auxperfil;
    }
    if(this.imageService.auxbanner!=null){
      this.persona.imgbanner = this.imageService.auxbanner;
    }
    this.personaService.update(id, this.persona).subscribe(
      data => {
        alert("persona modificado correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar persona");
        this.router.navigate(['']);
      }
    )
  }
  uploadImagePerfil($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    this.name = "perfil_" + id;
    this.imageService.uploadImage($event, this.name);
    this.imageService.loading = true;
  }
  uploadImagebanner($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    this.name = "banner_" + id;
    this.imageService.uploadImage($event, this.name);
    this.imageService.loading = true;
  }
}
