import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Pagina2Service {
  // public guardado: any = {
  //   parte1: "",

  // }
  public guardado$ = new BehaviorSubject<any>('');
  constructor() { }
  public getGuardado$(){
    return this.guardado$.asObservable();
  }
  public setGuardado(cadena: string): void{
    this.guardado$.next(cadena);
  }
}
