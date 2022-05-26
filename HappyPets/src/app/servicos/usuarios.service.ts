import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

export interface client{
  id: number;
  nome: string;
  telefone: string;
  endereco: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
   
  private url = 'http://localhost/apiAppCrud/apiUsuarios';

  constructor(private htpp: HttpClient) { }

  getAll(){
    return this.htpp.get<[Usuarios]>(this.url);
  }
}