import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {
  lista:Libro[] = []
  constructor(private servicio:ServicioService) {
      servicio.getLibrosObservable().subscribe(lista => this.lista=lista)
   }

  FiltrarLista(text?:string|null){
    let texto = ""
    if (text==null || text==undefined) {
      texto=""
    }
    else{
      texto=text
    }
    this.servicio.filtrarLibros(texto)
  }

  ngOnInit() {
  }

}
