import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiServiceService {
  httpClient: HttpClient;

  constructor(http: HttpClient) {
    this.httpClient = http;
  }

  getPokemons(amount: number): Observable<any> {
    return this.httpClient.request('GET', "https://pokeapi.co/api/v2/pokemon?limit=" + amount + "&offset=0", {responseType: 'json'});
  }

  getPokemonDetails(url: string): Observable<any> {
    return this.httpClient.request('GET', url,{responseType : 'json'});
  }


  getPokemonByID(ID: number): Observable<any> {
    return this.httpClient.request('GET', "https://pokeapi.co/api/v2/pokemon/"+ID, {responseType: 'json'});
  }

  getPokemonByName(name: string): Observable<any> {
    return this.httpClient.request('GET', "https://pokeapi.co/api/v2/pokemon/"+name.trim().toLowerCase(), {responseType: 'json'});
  }

}
