import { Component } from '@angular/core';

import {CarteleraListComponent} from './cartelera-list.component'
 
@Component({
  selector: 'cartelera',
  templateUrl: '../cartelera.html',
  providers: [CarteleraListComponent],
})

export class CarteleraComponent {
	constructor(private menuStateService: MenuStateService) {}
	
    ngOnInit(): void {
        this.menuStateService.enable();
    }
}
