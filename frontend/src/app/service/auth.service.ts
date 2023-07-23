import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Auth, getIdTokenResult } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //authURL = 'http://localhost:8080/auth/';
  authURL = 'https://backendrde.onrender.com/auth/';

  constructor(private httpClient: HttpClient ,private afAuth:AngularFireAuth ) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario)
  }

  public loginWithCustomToken(customToken: string) {
     this.afAuth.signInWithCustomToken(customToken)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("inicializado");
      })
      .catch((error) => {
        console.error(error);
      });
  }

}
