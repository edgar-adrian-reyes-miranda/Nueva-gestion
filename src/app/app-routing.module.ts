import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./Logueos/login/login.component";
import { AdminComponent } from "./Logueos/admin/admin.component";
import { UsuarioComponent } from "./Pages/usuario/usuario.component";
import { FormularioCComponent } from "./Pages/usuario/formulario-c/formulario-c.component";
import { AdminsComponent } from "./Pages/admins/admins.component";
import { ListaPersonalesComponent } from "./Menu/lista-personales/lista-personales.component";
import { ListaEscolaresComponent } from "./Menu/lista-escolares/lista-escolares.component";
import { ListaIngresosComponent } from "./Menu/lista-ingresos/lista-ingresos.component";
import { ListaFtdComponent } from "./Menu/lista-ftd/lista-ftd.component";
import { BajasComponent } from "./Menu/bajas/bajas.component";
import { ExtrasComponent } from "./Menu/extras/extras.component";
import { UniversidadComponent } from "./Formatos/universidad/universidad.component";
import { ModalidadComponent } from "./Formatos/modalidad/modalidad.component";
import { ModalidadEscolarComponent } from "./Formatos/modalidad-escolar/modalidad-escolar.component";
import { TurnoComponent } from "./Formatos/turno/turno.component";
import { TutorComponent } from "./Formatos/tutor/tutor.component";
import { TramiteComponent } from "./Formatos/tramite/tramite.component";
import { CursosComponent } from "./Formatos/cursos/cursos.component";
import { HorarioComponent } from "./Formatos/horario/horario.component";
import { PerfilamientoComponent } from "./Formatos/perfilamiento/perfilamiento.component";
import { PeriodoComponent } from "./Formatos/periodo/periodo.component";
import { PlaneducativoComponent } from "./Formatos/planeducativo/planeducativo.component";
import { SexosComponent } from "./Formatos/sexos/sexos.component";
import { GruposComponent } from "./Formatos/grupos/grupos.component";
import { RegistroAddComponent } from "./Formatos/registro-add/registro-add.component";
import { ResgitroComponent } from "./Formularios/resgitro/resgitro.component";
import { PersonalesComponent } from "./Formularios/personales/personales.component";
import { EscolaresComponent } from "./Formularios/escolares/escolares.component";
import { IngresosComponent } from "./Formularios/ingresos/ingresos.component";
import { FtdComponent } from "./Formularios/ftd/ftd.component";
import { EnlaceComponent } from "./Formatos/enlace/enlace.component";
import { EstusInfotecComponent } from "./Formatos/estus-infotec/estus-infotec.component";
import { ProyectosComponent } from "./Formatos/proyectos/proyectos.component";
import { ReportesComponent } from "./Pages/usuario/reportes/reportes.component";


const routes: Routes = [
  ///Logueos
  { path: '', redirectTo: '/', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent, pathMatch: 'full' },
  //{ path: 'admin', component: AdminComponent, pathMatch: 'full' },
  //registros

  //vistas
  { path: 'vistaUsuario', component: UsuarioComponent, pathMatch: 'full' },
  { path: 'Admin', component: AdminComponent, pathMatch: 'full' },

  ///vistaAdministrador
  { path: 'General', component: AdminsComponent, pathMatch: 'full' },
  { path: 'datos-personales', component: ListaPersonalesComponent, pathMatch: 'full' },
  { path: 'datos-escolares', component: ListaEscolaresComponent, pathMatch: 'full' },
  { path: 'datos-ingresos', component: ListaIngresosComponent, pathMatch: 'full' },
  { path: 'datos-ftd', component: ListaFtdComponent, pathMatch: 'full' },
  { path: 'bajas', component: BajasComponent, pathMatch: 'full' },
  { path: 'datos-extras', component: ExtrasComponent, pathMatch: 'full' },
  { path: 'registro-admins', component: RegistroAddComponent, pathMatch: 'full' },

  ///extras
  { path: 'universidades', component: UniversidadComponent, pathMatch: 'full' },
  { path: 'modalidades', component: ModalidadComponent, pathMatch: 'full' },
  { path: 'modalidad-escolar', component: ModalidadEscolarComponent, pathMatch: 'full' },
  { path: 'tutor', component: TutorComponent, pathMatch: 'full' },
  { path: 'tramite', component: TramiteComponent, pathMatch: 'full' },
  { path: 'cursos', component: CursosComponent, pathMatch: 'full' },
  { path: 'grupo', component: GruposComponent, pathMatch: 'full' },
  { path: 'horario', component: HorarioComponent, pathMatch: 'full' },
  { path: 'turno', component: TurnoComponent, pathMatch: 'full' },
  { path: 'perfilamiento', component: PerfilamientoComponent, pathMatch: 'full' },
  { path: 'periodo', component: PeriodoComponent, pathMatch: 'full' },
  { path: 'plan-educativo', component: PlaneducativoComponent, pathMatch: 'full' },
  { path: 'sexo', component: SexosComponent, pathMatch: 'full' },
  { path: 'enlace', component: EnlaceComponent, pathMatch: 'full' },
  { path: 'estatus-infotec', component: EstusInfotecComponent, pathMatch: 'full' },
  { path: 'proyectos', component: ProyectosComponent, pathMatch: 'full' },

  ///formualrio usuario
  { path: 'Formulario', component: FormularioCComponent, pathMatch: 'full' },
  { path: 'Reportes', component: ReportesComponent, pathMatch: 'full' },

  //registro
  { path: 'registro', component: ResgitroComponent, pathMatch: 'full' },

  ///formularios de registro
  { path: 'registro-personales', component: PersonalesComponent, pathMatch: 'full' },
  { path: 'registro-escolares', component: EscolaresComponent, pathMatch: 'full' },
  { path: 'registro-ingresos', component: IngresosComponent, pathMatch: 'full' },
  { path: 'registro-ftd', component: FtdComponent, pathMatch: 'full' },

  //guardados y ecitaciones
  { path: 'universidades/forms/:id_uni', component: UniversidadComponent, pathMatch: 'full' },
  { path: 'cursos/forms/:id_curso', component: CursosComponent, pathMatch: 'full' },
  { path: 'grupo/forms/:id_grupo', component: GruposComponent, pathMatch: 'full' },
  { path: 'proyectos/forms/:id_proyecto', component: ProyectosComponent, pathMatch: 'full' },
  { path: 'perfilamiento/forms/:id_perfilamiento', component: PerfilamientoComponent, pathMatch: 'full' },
  { path: 'actualizar/forms/:id_person', component: PersonalesComponent, pathMatch: 'full' },
  { path: 'actualizar/forms/:id_escolar', component: EscolaresComponent, pathMatch: 'full' },
  { path: 'actualizar/forms/:id_ftd', component: FtdComponent, pathMatch: 'full' },
  { path: 'actualizar/forms/:id_ingreso', component: IngresosComponent, pathMatch: 'full' },
  { path: 'proyectos/forms/:id:proyecto', component: ProyectosComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
