import { Component } from '@angular/core';
import { Libro } from '../libro';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listaLibros:Libro[] = []
  constructor(private servicio:ServicioService) {
    servicio.getLibrosObservable().subscribe(lista => this.listaLibros = lista)
  }

}
