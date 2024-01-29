import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuService } from './pages/menu/menu.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { DrinkService } from './services/menudrink/drink.service';
import { PrenotaComponent } from './pages/prenota/prenota.component';
import { EventiComponent } from './pages/eventi/eventi.component';
import { GalleriaComponent } from './pages/galleria/galleria.component';
import { ContattiComponent } from './pages/contatti/contatti.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    PrenotaComponent,
    EventiComponent,
    GalleriaComponent,
    ContattiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [MenuService, DrinkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
