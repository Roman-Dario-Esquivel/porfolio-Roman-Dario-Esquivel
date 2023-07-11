import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = " ";
  auxurl: string = " ";
  auxbanner: string= " ";
  auxperfil: string= " ";
  loading: boolean = false;

  constructor(private storage: Storage) { }

  public uploadImage($event:any, name: string){
    const file = $event.target.files[0]
    const imgRef = ref(this.storage, `imagen/`+ name)
    //this.loading =true;

    uploadBytes(imgRef, file)
    .then(response => {this.getImages(name)})
    .catch(error => console.log(error)
    )
  }
  getImages(name: string){
    const imagesRef = ref(this.storage, 'imagen')
    list(imagesRef)
    .then(async response => {
      for(let item of response.items ){
        this.auxurl = await getDownloadURL(item);
        if(this.auxurl.includes(name)){
          this.loading = false;
          this.url = this.auxurl;
        }
        if(name=="banner_1"){
          if(this.auxurl.includes(name)){
            this.loading = false;
            this.auxbanner = this.auxurl;
            this.url =null;
          }
        }else{
          if(name=="perfil_1"){
            if(this.auxurl.includes(name)){
              this.loading = false;
              this.auxperfil = this.auxurl;
              this.url =null;
            }
          }
        }


        //
      }

    })
    .catch(error => console.log(error))
  }
}
