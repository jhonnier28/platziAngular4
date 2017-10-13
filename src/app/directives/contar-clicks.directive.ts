import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  //selector: 'a[contar-clicks]'//'a': solo aplica para andcors, es decir para hiperlinks e hipervinculos, a los a no se puede dar opacidad
  selector: 'li[contar-clicks]'//'a': solo aplica para andcors, es decir para hiperlinks e hipervinculos
})
export class ContarClicksDirective {
  clickN = 0;//vartiable para llevar el conteo de los clicks

  @HostBinding('style.opacity') opacity = .1  //.1: total opacidad  ,0: total trasparencia
  @HostListener('click', ['$event.target']) onclick(btn) {
    console.log('a', btn, "Numero de clicks", this.clickN++);
    this.opacity += .1;
  }

  constructor() { }

}
