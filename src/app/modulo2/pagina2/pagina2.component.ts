import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.scss']
})
export class Pagina2Component implements OnInit {
  public nombre: string ="Luis";
  public campoTexto!: string[];
  public campoForm = new FormControl();
  public formulario = new FormGroup({
    texto: new FormControl(),
  });
  constructor(){
    this.formulario.get("texto")?.valueChanges.subscribe(
      valor => this.campoTexto = valor.split(''));
  }
  ngOnInit(): void {

  }
  public cambiarNombre(): void{
    this.nombre = this.formulario.get("texto")?.value;
  }
}
