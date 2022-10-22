
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Heroe } from '../interfaces/heroe.interfece';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  // private URL: string = 'http://localhost:3000/heroes';
  private URL: string = environment.URL_JSON;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(this.URL);
  }

  getHeroe(idHeroe: string): Observable<Heroe> {
    // http://localhost:3000/heroes/dc-wonder
    return this.http.get<Heroe>(`${this.URL}/${idHeroe}`);
  }

  getSugerencias(sugerencia: string): Observable<Heroe[]> {
    // http://localhost:3000/heroes?q=a
    return this.http.get<Heroe[]>(`${this.URL}?q=${sugerencia}`);
  }

  crearHeroe(heroe: Heroe): Observable<Heroe> {
    // http://localhost:3000/heroes?q=a
    return this.http.post<Heroe>(`${this.URL}`, heroe);
  }
}
