import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Libro } from './libro';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private listaLibros:Libro[]
  private lLibrosSubject:BehaviorSubject<Libro[]>
  constructor() {
    this.listaLibros = []
    this.listaLibros.push(new Libro("Er gato con botas"))
    this.listaLibros.push(new Libro("Er quijote"))
    this.lLibrosSubject = new BehaviorSubject(this.listaLibros);
   }

  getLibrosObservable():Observable<Libro[]>{
    return this.lLibrosSubject.asObservable()
  }

  addLibro(libro:Libro){
    this.listaLibros.push(libro)
    this.lLibrosSubject.next(this.listaLibros);
  }

  getLibro(indice:number):Libro{
    return this.listaLibros[indice]
  }

  filtrarLibros(titulo:string){
    if (titulo=="") {
      this.lLibrosSubject.next(this.listaLibros)
    }else{
      let librosFiltrados:Libro[] = []
      this.listaLibros.forEach(element => {
      if (element.Nombre.includes(titulo)) {
        librosFiltrados.push(element)
      }
    
    });
    this.lLibrosSubject.next(librosFiltrados)
    }

    
  }
}
