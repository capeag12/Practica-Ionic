import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { Libro } from '../libro';
import { ServicioService } from '../servicio.service';

@Component({
  standalone:true,
  selector: 'libro-comp',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.scss'],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class LibroComponent implements OnInit {
  @Input() indice:number=-1 
  libro:Libro = new Libro("")
  constructor(private servicio:ServicioService) { 
  
  }

  ngOnInit() {
    this.libro = this.servicio.getLibro(this.indice)
  }

}
