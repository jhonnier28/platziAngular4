import { Component } from '@angular/core';

@Component({
  selector: 'app-practicando',
  templateUrl: './practicando.component.html',
  styles: []
})
export class PracticandoComponent {
  title = 'Platzi Square';
  a = 8;
  b = 5;
  listo = false;
  pNombre: string = '';
  pApellido: string = '';
  listaLugares: any = [
    { plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: 'Floreria la gardenia' },
    { plan: 'gratuito', cercania: 1, distancia: 1.8, active: false, nombre: 'Donas la pesadita' },
    { plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre: 'Veterinaria huellitas' },
    { plan: 'pagado', cercania: 3, distancia: 10, active: false, nombre: 'Shshi' },
    { plan: 'gratuito', cercania: 3, distancia: 35, active: false, nombre: 'Hotel la garcia' },
    { plan: 'pagado', cercania: 3, distancia: 120, active: true, nombre: 'Zapateria el clavo' }
  ];

  lat: number = 2.4411063;
  lng: number = -76.6078117;
  zoom: number = 15;

  constructor() {
    setTimeout(() => {
      this.listo = true;
    }, 3000)
  }

  hacerAlgo() {
    alert('Haciendo algo ' + this.pNombre);
  }

}
