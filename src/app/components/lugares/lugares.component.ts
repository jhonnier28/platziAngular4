import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styles: []
})
export class LugaresComponent implements OnInit {
  lat: number = 2.4411063;
  lng: number = -76.6078117;
  zoom: number = 15;
  listaLugares: any = [
    { id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: 'Floreria la gardenia' },
    { id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: false, nombre: 'Donas la pesadita' },
    { id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre: 'Veterinaria huellitas' },
    { id: 4, plan: 'pagado', cercania: 3, distancia: 10, active: false, nombre: 'Shshi' },
    { id: 5, plan: 'gratuito', cercania: 3, distancia: 35, active: false, nombre: 'Hotel la garcia' },
    { id: 6, plan: 'pagado', cercania: 3, distancia: 120, active: true, nombre: 'Zapateria el clavo' }
  ];


  constructor() { }

  ngOnInit() {
  }

}
