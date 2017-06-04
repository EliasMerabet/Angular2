import { Injectable } from '@angular/core';

import { Pelicula } from './pelicula.model';
import { CARTELERA } from './pelicula-data';

@Injectable()
export class CarteleraService {
    getPeliculas(): Promise<Pelicula[]> {
		return new Promise((resolve, reject) => {
    		resolve(CARTELERA);
  		});
 	}
}
