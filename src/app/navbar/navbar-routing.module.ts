import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarPage } from '../buscar/buscar.page';
import { HomePage } from '../home/home.page';

import { NavbarPage } from './navbar.page';

const routes: Routes = [
  { //Basicamente para crear un componente NavBar debes crear una page y en su routing poner las pages a los que deseas ir
    path: '',
    component: NavbarPage,
    children:[
      {
        path:'',
        component:HomePage
      },
      {
        path:'home',
        component:HomePage
      }
      ,
      {
        path:'buscar',
        component:BuscarPage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavbarPageRoutingModule {}
