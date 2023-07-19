import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

 //authURL = 'http://localhost:8080/auth/';
 authURL = 'https://backendrde.onrender.com/auth/';

  constructor(private httpClient: HttpClient,private afAuth: AngularFireAuth ) { }

 public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
   return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
 }

 public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
   return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario)
 }

 loginWithCustomToken(customToken: string) {

  signInWithCustomToken(getAuth(),customToken)
    .then((userCredential) => {
      console.log(userCredential.user);
    })
    .catch((error) => {
      console.error(error);
    });
}

}
