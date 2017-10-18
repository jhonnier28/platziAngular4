import { ActivatedRoute } from '@angular/router';
import { LugaresService } from './../../services/lugares.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styles: []
})
export class CrearComponent implements OnInit {

  lugar: any = {};
  id = null;
  constructor(private route: ActivatedRoute, private lugaresService: LugaresService, private _activatedRoute: ActivatedRoute, private _router: Router) {
    this.id = this._activatedRoute.snapshot.params['id'];
    if (this.id !== 'new') {
      this.lugaresService
        .getLugar(this.id).
        valueChanges().subscribe(lugar => {
          this.lugar = lugar;
        });
    }
  }

  ngOnInit() {
  }

  // guardarLugar() {
  //   var direccion = this.lugar.calle + ',' + this.lugar.ciudad + ',' + this.lugar.pais;
  //   this.lugaresService.obtenerGeoData(direccion)
  //     .subscribe((result) => {
  //       this.lugar.lat = result.json().results[0].geometry.location.lat;
  //       this.lugar.lng = result.json().results[0].geometry.location.lng;
  //       this.lugar.id = Date.now();
  //       if (this.id != 'new') {
  //         this.lugaresService.editarLugar(this.lugar);
  //         alert('Negocio editado con exito');
  //       } else {
  //         this.lugaresService.guardarLugar(this.lugar);
  //         alert('Negocio guardado con exito');
  //       }

  //       this.lugar = {};
  //     });
  // }

  public guardarLugar() {
    const direccion = this.lugar.calle + ',' + this.lugar.ciudad + ',' + this.lugar.pais;
    this.lugaresService
      .obtenerGeoData(direccion)
      .subscribe(result => {

        this.lugar.lat = result.json().results[0].geometry.location.lat;
        this.lugar.lng = result.json().results[0].geometry.location.lng;

        if (this.id !== 'new') {
          this.lugaresService.editarLugar(this.lugar);
          alert('Negocio Editado con Exito');
          //this._router.navigate(['/crear', 'new']);
          this._router.navigate(['/lugares']);

        } else {
          this.lugar.id = Date.now();
          this.lugaresService.guardarLugar(this.lugar);
          alert('Negocio Creado con Exito');
          //this._router.navigate(['/crear', 'new']);
          this._router.navigate(['/lugares']);
        }
        this.lugar = {};
      }, error => console.log(error));
  }
}
