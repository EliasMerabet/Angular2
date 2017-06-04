import { Component } from '@angular/core';
import { MenuStateService } from './menu-state.service';

@Component({
  selector: 'my-app',
  template: `
  <ul id="nav-principal" *ngIf="menuStateService.isActive" style="background-color:white;" class="nav nav-tabs">
  	<li role="presentation" class="active"><a routerLink="/index">Index</a><li>
    <li role="presentation"><a routerLink="/socios">Socios</a><li>
   	<li role="presentation"><a routerLink="/cartelera">Cartelera</a><li>
  </ul>
  <router-outlet></router-outlet>
  `
})

export class AppComponent {
	constructor(public menuStateService: MenuStateService) {}
}
