import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Libro } from './libro';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private listaLibros:Libro[]
  private lLibrosSubject:BehaviorSubject<Libro[]>
  private librosFiltrados:BehaviorSubject<Libro[]>
  constructor() {
    this.listaLibros = []
    this.listaLibros.push(new Libro("El gato con botas"))
    this.listaLibros.push(new Libro("El quijote"))
    this.listaLibros.push(new Libro("El señor de las moscas"))
    this.listaLibros.push(new Libro("Metro 2033"))
    this.lLibrosSubject = new BehaviorSubject(this.listaLibros);
    this.librosFiltrados = new BehaviorSubject(this.listaLibros);
   }

  getLibrosObservable():Observable<Libro[]>{
    return this.lLibrosSubject.asObservable()
  }

  getLibrosFiltradosObs():Observable<Libro[]>{
    return this.librosFiltrados.asObservable()
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
      this.librosFiltrados.next(this.listaLibros)
    }else{
      let librosFiltrados:Libro[] = []
      this.listaLibros.forEach(element => {
      if (element.Nombre.includes(titulo)) {
        librosFiltrados.push(element)
      }
    
    });
    this.librosFiltrados.next(librosFiltrados)
    }

    
  }
}
