import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styles: []
})
export class LugaresComponent implements OnInit {
  lat: number = 2.4411063;
  lng: number = -76.6078117;
  zoom: number = 15;
  listaLugares = null;

  constructor(private lugaresService: LugaresService) {
    //this.listaLugares = lugaresService.getLugares();
    lugaresService.getLugares()
      .valueChanges().subscribe(lugares => {
        console.log(lugares)
        this.listaLugares = lugares;
      });
  }

  ngOnInit() {
  }

}
