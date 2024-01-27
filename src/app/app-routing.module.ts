import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { PrenotaComponent } from './pages/prenota/prenota.component';
import { EventiComponent } from './pages/eventi/eventi.component';
import { GalleriaComponent } from './pages/galleria/galleria.component';
import { ContattiComponent } from './pages/contatti/contatti.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Central | Restaurant'
  },
  {
    path: 'menu',
    component: MenuComponent,
    title: 'Menù | Central'
  },
  {
    path: 'prenota',
    component: PrenotaComponent,
    title: 'Prenota | Central'
  },
  {
    path: 'eventi',
    component: EventiComponent,
    title: 'Eventi | Central'
  },
  {
    path: 'galleria',
    component: GalleriaComponent,
    title: 'Galleria | Central'
  },
  {
    path: 'contatti',
    component: ContattiComponent,
    title: 'Contatti | Central'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
