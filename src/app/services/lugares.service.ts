import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Http } from '@angular/http';

@Injectable()
export class LugaresService {
  listaLugares: any = [
    { id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: 'Floreria la gardenia' },
    { id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: false, nombre: 'Donas la pesadita' },
    { id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre: 'Veterinaria huellitas' },
    { id: 4, plan: 'pagado', cercania: 3, distancia: 10, active: false, nombre: 'Shshi' },
    { id: 5, plan: 'gratuito', cercania: 3, distancia: 35, active: false, nombre: 'Hotel la garcia' },
    { id: 6, plan: 'pagado', cercania: 3, distancia: 120, active: true, nombre: 'Zapateria el clavo' },
    { id: 7, plan: 'pagado', cercania: 2, distancia: 80, active: true, nombre: 'Micelanea praga' }
  ];

  constructor(private afDB: AngularFireDatabase, private http: Http) { }

  public getLugares() {
    return this.afDB.list('lugares/');
  }

  public buscarLugar(par_id) {
    return this.listaLugares.filter((lugar) => { return lugar.id == par_id })[0] || null;
  }

  guardarLugar(objLugar) {
    this.afDB.database.ref('lugares/' + objLugar.id).set(objLugar);
  }

  editarLugar(objLugar) {
    this.afDB.database.ref('lugares/' + objLugar.id).set(objLugar);
  }

  public obtenerGeoData(parDireccion) {
    //http://maps.google.com/maps/api/geocode/json?address=9-55+calle+72,+Bogota,Colombia
    return this.http.get('http://maps.google.com/maps/api/geocode/json?address=' + parDireccion);
  }

  public getLugar(parId) {
    return this.afDB.object('lugares/' + parId);
  }
}
