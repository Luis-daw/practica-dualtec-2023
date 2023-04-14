import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina2Component } from './pagina2/pagina2.component';
import { Pagina3Component } from './pagina3/pagina3.component';

const routes: Routes = [
  {
    path: "",
    component: Pagina2Component
  },
  {
    path: "p3",
    component: Pagina3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Modulo2RoutingModule { }
