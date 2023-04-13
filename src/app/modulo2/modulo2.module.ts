import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Modulo2RoutingModule } from './modulo2-routing.module';
import { Pagina2Component } from './pagina2/pagina2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    Pagina2Component,
  ],
  imports: [
    CommonModule,
    Modulo2RoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class Modulo2Module { }
