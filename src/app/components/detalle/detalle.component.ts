import { LugaresService } from './../../services/lugares.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent {

  id = null;
  lugar: any = {};

  constructor(private route: ActivatedRoute, private lugaresService: LugaresService) {
    console.log("parametro recibido: ", this.route.snapshot.params['id']);
    console.log("query recibido: ", this.route.snapshot.queryParams['action']);
    console.log("query recibido: ", this.route.snapshot.queryParams['referer']);
    this.id = this.route.snapshot.params['id'];
    this.lugar = this.lugaresService.buscarLugar(this.id);
  }
}
