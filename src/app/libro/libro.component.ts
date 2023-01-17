import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';

@Component({
  standalone:true,
  selector: 'libro-comp',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.scss'],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class LibroComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
