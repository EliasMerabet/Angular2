import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }   from './app.component';

// Importamos la configuración de rutas que hemos creado anteriormente
import { routing } from './app.routing';

// Importamos los componentes
import { SociosComponent } from './socios.component';
import { Index } from './index';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    routing    
  ],
  declarations: [ 
    AppComponent,
    SociosComponent,
    Index
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule {}
