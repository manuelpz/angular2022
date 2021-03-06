import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BdCochesService {

  private coches:any
  private fabricante:any
  private tecnologia:any
  private urlBase:String = "https://my-json-server.typicode.com/manuellopez97/angular2022/"
  private cargando:boolean = true
  constructor(private http:HttpClient) {
    this.coches = new Array()
    this.fabricante = new Array()
    http.get(this.urlBase + 'coches').subscribe(
      (response:any)=>{
        this.coches = response
        this.cargando = false
      }
)
http.get(this.urlBase + 'fabricantes').subscribe(
  (response:any)=>{
    this.fabricante = response
  }
)

http.get(this.urlBase + 'tecnologias').subscribe(
  (response:any)=>{
    this.tecnologia = response
  }
)

  }

  getCoches(){
    return this.coches
  }
  isCargando(){
    return this.cargando
  }

  getFabricante(){
    return this.fabricante
  }

  getTecnologia(){
    return this.tecnologia
  }

  getCochesById(id:string){
    return this.coches.find((coche:any) => coche.id == id)

  }
}
