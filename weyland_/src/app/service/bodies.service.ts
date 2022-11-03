
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Bodi } from '../interface/bodi.interface';
import { Response } from '../interface/response.interface';
@Injectable({
  providedIn: 'root'
})
export class BodiesService {
  private readonly apiUrl: string ='https://api.le-systeme-solaire.net/rest';
  private readonly bodiUrl: string ='https://api.le-systeme-solaire.net/rest.php/bodies/';
  constructor(private http: HttpClient) { }
  bodies: any;
  getBodies(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/bodies`).pipe(
      map(response => this.processResponse(response))
    );
  }

  getBodi(englishName: string): Observable<any>{
    return this.http.get<any>(`${this.bodiUrl}${englishName}`).pipe(
      map(bodi => this.bodiProcessResponse(bodi))
    );;
  }

  private processResponse(response: Response): Response {
    return {
      bodies: response.bodies.map((bodies: any) => (<Bodi>{
        englishName: bodies.englishName,
        discoveredBy: bodies.discoveredBy,
        discoveryDate: bodies.discoveryDate
      }))
    };
  }

  private bodiProcessResponse(bodi: Bodi): Bodi{
    return {
        englishName: bodi.englishName,
        discoveredBy: bodi.discoveredBy,
        discoveryDate: bodi.discoveryDate
    };
  }

  saveData(bodi: Bodi){
    let data = {englishName: bodi.englishName, DiscoveredBY: bodi.discoveredBy, DiscoveryDate: bodi.discoveryDate}
    console.log(data);
    localStorage.setItem('bodies',JSON.stringify(data));
  }

  saveBodies(response: Response){
    let data = {bodies: response.bodies.map((bodies: any) => (<Bodi>{
      englishName: bodies.englishName,
      discoveredBy: bodies.discoveredBy,
      discoveryDate: bodies.discoveryDate}))}
    localStorage.setItem('bodies',JSON.stringify(data));
  }

  loadData(){
    let data: any = localStorage.getItem('bodies');
    this.bodies = JSON.parse(data);
  }
}
