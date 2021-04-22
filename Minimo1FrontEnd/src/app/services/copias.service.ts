import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


import {copiaSeguridad} from '../model/copia'

@Injectable({
  providedIn: 'root'
})
export class CopiasService {

  constructor( private http: HttpClient) {}

  getCopias(): Observable<copiaSeguridad[]>{
    return this.http.get<copiaSeguridad[]>(environment.apiURL + "/copiaseguridad");
  }

  getCopia(id: String): Observable<copiaSeguridad>{
    return this.http.get<copiaSeguridad>(environment.apiURL + "/copiaseguridad/" + id);
  }

  modificarCopia(resultadomodificado: copiaSeguridad, id: String): Observable<any>{
    return this.http.put(environment.apiURL + "/copiaseguridad/" + id, resultadomodificado);
  }

  addCopia(nuevoresultado: copiaSeguridad): Observable<any>{
    return this.http.post(environment.apiURL + '/copiaseguridad', nuevoresultado);
  }















}
