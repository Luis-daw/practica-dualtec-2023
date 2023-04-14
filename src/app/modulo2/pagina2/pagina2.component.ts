import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Pagina2Service } from '../pagina2.service';
import { ApiCallService, RespuestaApi } from '../api-call.service';
import { tap } from 'rxjs/operators';


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
    // tlf: new FormControl(null, [
    //   Validators.minLength(9), Validators.maxLength(9), Validators.required
    // ]),
    // correo: new FormControl('ejemplo@ejemplo.es', [Validators.email]),
  });
  public guardado = this._p2Service.guardado$;
  public campoObservable: string="";
  public llamadaApi!: RespuestaApi;
  public palabras5letras!: string[];

  constructor(
    private readonly _p2Service:Pagina2Service,
    private readonly _apiCall: ApiCallService,
    ){
    this.formulario.get("texto")?.valueChanges.subscribe(
      valor => this.campoTexto = valor.split(''));
      _p2Service.getGuardado$().subscribe(valor => this.campoObservable = valor)
    }
  ngOnInit(): void {

  }
  public cambiarNombre(): void{
    this.nombre = this.formulario.get("texto")?.value;
    this._p2Service.setGuardado(this.nombre);
  }
  public obtenerPalabras(): void{
    this._apiCall.getPalabras().pipe(
      tap((respuesta: RespuestaApi) => {
        this.llamadaApi = respuesta;
        this.palabras5letras = respuesta.words.filter((palabra: string) =>{
          return palabra.length === 5;
        });
      }),
    ).subscribe();
  }
}
