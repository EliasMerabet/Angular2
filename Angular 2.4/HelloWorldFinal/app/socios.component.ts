import { Component, OnInit } from '@angular/core';
import { MenuStateService } from './menu-state.service';

@Component({
  selector: 'socios',
  templateUrl: '../socios.html',
})

export class SociosComponent implements OnInit {
    constructor(private menuStateService: MenuStateService) {}
	
    ngOnInit(): void {
        this.menuStateService.enable();
    }
}
