import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { InicioComponent } from './Portada/inicio/inicio.component';
import { LoginComponent } from './Logueos/login/login.component';
import { AdminComponent } from './Logueos/admin/admin.component';
import { UsuarioComponent } from './Pages/usuario/usuario.component';
import { AdminsComponent } from './Pages/admins/admins.component';
import { MatCardModule } from "@angular/material/card";
import { FormularioCComponent } from './Pages/usuario/formulario-c/formulario-c.component';
import { ListaPersonalesComponent } from './Menu/lista-personales/lista-personales.component';
import { ListaEscolaresComponent } from './Menu/lista-escolares/lista-escolares.component';
import { ListaIngresosComponent } from './Menu/lista-ingresos/lista-ingresos.component';
import { ListaFtdComponent } from './Menu/lista-ftd/lista-ftd.component';
import { BajasComponent } from './Menu/bajas/bajas.component';
import { ExtrasComponent } from './Menu/extras/extras.component';
import { UniversidadComponent } from './Formatos/universidad/universidad.component';
import { TramiteComponent } from './Formatos/tramite/tramite.component';
import { ModalidadComponent } from './Formatos/modalidad/modalidad.component';
import { ModalidadEscolarComponent } from './Formatos/modalidad-escolar/modalidad-escolar.component';
import { TutorComponent } from './Formatos/tutor/tutor.component';
import { CursosComponent } from './Formatos/cursos/cursos.component';
import { HorarioComponent } from './Formatos/horario/horario.component';
import { TurnoComponent } from './Formatos/turno/turno.component';
import { PerfilamientoComponent } from './Formatos/perfilamiento/perfilamiento.component';
import { PeriodoComponent } from './Formatos/periodo/periodo.component';
import { PlaneducativoComponent } from './Formatos/planeducativo/planeducativo.component';
import { SexosComponent } from './Formatos/sexos/sexos.component';
import { GruposComponent } from './Formatos/grupos/grupos.component';
import { PersonalesComponent } from './Formularios/personales/personales.component';
import { EscolaresComponent } from './Formularios/escolares/escolares.component';
import { IngresosComponent } from './Formularios/ingresos/ingresos.component';
import { FtdComponent } from './Formularios/ftd/ftd.component';
import { RegistroAddComponent } from './Formatos/registro-add/registro-add.component';
import { ResgitroComponent } from './Formularios/resgitro/resgitro.component';
import { EnlaceComponent } from './Formatos/enlace/enlace.component';
import { EstusInfotecComponent } from './Formatos/estus-infotec/estus-infotec.component';
import { ProyectosComponent } from './Formatos/proyectos/proyectos.component';
import { ReportesComponent } from './Pages/usuario/reportes/reportes.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    AdminComponent,
    UsuarioComponent,
    AdminsComponent,
    FormularioCComponent,
    ListaPersonalesComponent,
    ListaEscolaresComponent,
    ListaIngresosComponent,
    ListaFtdComponent,
    BajasComponent,
    ExtrasComponent,
    UniversidadComponent,
    TramiteComponent,
    ModalidadComponent,
    ModalidadEscolarComponent,
    TutorComponent,
    CursosComponent,
    HorarioComponent,
    TurnoComponent,
    PerfilamientoComponent,
    PeriodoComponent,
    PlaneducativoComponent,
    SexosComponent,
    GruposComponent,
    PersonalesComponent,
    EscolaresComponent,
    IngresosComponent,
    FtdComponent,
    RegistroAddComponent,
    ResgitroComponent,
    EnlaceComponent,
    EstusInfotecComponent,
    ProyectosComponent,
    ReportesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MatCardModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
