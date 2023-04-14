import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'any'
})
export class ApiCallService {

  constructor(
    private readonly _httpClient: HttpClient,
  ) { }
  public getPalabras(): Observable<any>{
    return this._httpClient.get('https://212.227.227.158/api/words');
  }
}

export interface RespuestaApi{
  words: string[];
  max_word_size: number;
  min_word_size: number;
};
