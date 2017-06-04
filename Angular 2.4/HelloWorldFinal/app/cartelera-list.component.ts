import { Component, OnInit } from '@angular/core';

import { CarteleraService } from './cartelera.service';
import { Pelicula } from './pelicula.model';
 
@Component({
  selector: 'cartelera-list',
  template: `
  <ul style="color:white;">
  	<li *ngFor="let pelicula of cartelera"> 
  		<p>+++ {{ pelicula.titulo }} - {{ pelicula.genero }} - {{ pelicula.duracion }} </p>
  	</li>
  </ul>
  `,
})
 
export class CarteleraListComponent implements OnInit {

	public cartelera: Pelicula[];
	
	constructor(private carteleraService: CarteleraService) {}
	
	getPeliculas(): void {
		this.carteleraService.getPeliculas().then((cartelera: Pelicula[]) => this.cartelera = cartelera);
	}

	ngOnInit(): void {
		this.getPeliculas();
	}
		
}
