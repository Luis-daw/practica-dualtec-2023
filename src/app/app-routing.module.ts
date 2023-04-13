import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina2Component } from './modulo2/pagina2/pagina2.component';

const routes: Routes = [
  {
    path: "otra",
    loadChildren: () => import ( "./modulo2/modulo2.module" ).then(m => m.Modulo2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
