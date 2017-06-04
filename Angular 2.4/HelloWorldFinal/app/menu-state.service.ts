import { Injectable } from '@angular/core';

@Injectable()
export class MenuStateService {
  isActive: boolean = false;

  enable() {
    this.isActive = true;
  }

  disable() {
    this.isActive = false;
  }
}
