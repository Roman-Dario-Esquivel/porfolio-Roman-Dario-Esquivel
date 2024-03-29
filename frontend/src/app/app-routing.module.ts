import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './components/acerca-de-mi/edit-acerca-de.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditSkillComponent } from './components/hard-soft-skills/edit-skill.component';
import { NewSkillComponent } from './components/hard-soft-skills/new-skill.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewProyectosSComponent } from './components/proyectos/new-proyectos-s.component';
import { EditProyectosSComponent } from './components/proyectos/edit-proyectos-s.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'newexp', component: NewExperienciaComponent},
  { path: 'editexp/:id', component: EditExperienciaComponent},
  { path: 'newedu', component: NewEducacionComponent},
  { path: 'editedu/:id', component: EditEducacionComponent},
  { path: 'newskill', component: NewSkillComponent},
  { path: 'editskill/:id', component: EditSkillComponent},
  { path: 'newproyec', component: NewProyectosSComponent},
  { path: 'editproyec/:id', component: EditProyectosSComponent},
  { path: 'editacercade/:id', component: EditAcercaDeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
