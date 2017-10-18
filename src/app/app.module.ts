import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

//Servicios
import { LugaresService } from './services/lugares.service';

//Directivas
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';

//Componentes
import { DetalleComponent } from './components/detalle/detalle.component';
import { LugaresComponent } from './components/lugares/lugares.component';
import { PracticandoComponent } from './components/practicando/practicando.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CrearComponent } from './components/crear/crear.component';


const appRoutes: Routes = [
  { path: '', component: LugaresComponent },
  { path: 'lugares', component: LugaresComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'crear/:id', component: CrearComponent },
  { path: 'practica', component: PracticandoComponent }

];

export const firebaseConfig = {
  apiKey: "AIzaSyBrmgNyVm0wmMIW1rGFHHaZQfSvpE3Rfs8",
  authDomain: "platzisquare-c7c85.firebaseapp.com",
  databaseURL: "https://platzisquare-c7c85.firebaseio.com",
  storageBucket: "platzisquare-c7c85.appspot.com",
  messagingSenderId: "630692172838"
};

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    PracticandoComponent,
    ContactoComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFhT8_Deob6i0WloYFQVhb__ytsLL0NfU'
    }),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule

  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
