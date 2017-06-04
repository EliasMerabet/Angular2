import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }   from './app.component';

// Importamos la configuración de rutas que hemos creado anteriormente
import { routing } from './app.routing';

// Importamos los componentes
import { SociosComponent } from './socios.component';
import { Index } from './index';
import { CarteleraComponent } from './cartelera.component';
import { CarteleraListComponent } from './cartelera-list.component';

import { CarteleraService } from './cartelera.service';
import { MenuStateService } from './menu-state.service';


@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    routing    
  ],
  declarations: [ 
    AppComponent,
    SociosComponent,
    Index,
    CarteleraComponent,
    CarteleraListComponent
  ],
  providers: [
	CarteleraService,
	MenuStateService
  ], 
  bootstrap:    [ AppComponent ]
})

export class AppModule {}
