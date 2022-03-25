import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, toArray } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  baseUrl = environment.baseUrl;
  pokemon = [ ];

  constructor(private http: HttpClient) {}


//  getUsers() {
//    this.http.get("https://pokeapi.co/api/v2/berry/1").subscribe(data => {
//      console.log(data);
//    });
//  }
  

  getPoke(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/pokemon?limit=1126`);
  }

    sacarPoke(nombrePokemon:any): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/pokemon/${nombrePokemon}`);
  }

}
