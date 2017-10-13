import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent {

  listaLugares: any = [
    { id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: 'Floreria la gardenia', descripcion: 'Descripcion id 1' },
    { id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: false, nombre: 'Donas la pesadita', descripcion: 'Descripcion id 2' },
    { id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre: 'Veterinaria huellitas', descripcion: 'Descripcion id 3' },
    { id: 4, plan: 'pagado', cercania: 3, distancia: 10, active: false, nombre: 'Shshi', descripcion: 'Descripcion id 4' },
    { id: 5, plan: 'gratuito', cercania: 3, distancia: 35, active: false, nombre: 'Hotel la garcia', descripcion: 'Descripcion id 5' },
    { id: 6, plan: 'pagado', cercania: 3, distancia: 120, active: true, nombre: 'Zapateria el clavo', descripcion: 'Descripcion id 6' }
  ];

  id = null;
  lugar: any = {};

  constructor(private route: ActivatedRoute) {
    console.log("parametro recibido: ", this.route.snapshot.params['id']);
    console.log("query recibido: ", this.route.snapshot.queryParams['action']);
    console.log("query recibido: ", this.route.snapshot.queryParams['referer']);
    this.id = this.route.snapshot.params['id'];
    console.log(this.buscarLugar());
    this.lugar = this.buscarLugar();
  }

  buscarLugar() {
    return this.listaLugares.filter((lugar) => { return lugar.id == this.id })[0] || null;
  }


}
