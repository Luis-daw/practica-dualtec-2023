import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { Modulo2RoutingModule } from './modulo2-routing.module';
import { Pagina2Component } from './pagina2/pagina2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Pagina3Component } from './pagina3/pagina3.component';

@NgModule({
  declarations: [
    Pagina2Component,
    Pagina3Component,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    Modulo2RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
})
export class Modulo2Module { }
