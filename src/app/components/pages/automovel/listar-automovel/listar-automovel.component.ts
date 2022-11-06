import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Automovel } from 'src/app/models/automovel';

@Component({
  selector: 'app-listar-automovel',
  templateUrl: './listar-automovel.component.html',
  styleUrls: ['./listar-automovel.component.css']
})
export class ListarAutomovelComponent implements OnInit {
  automovel!: Automovel[];
  id!: number;

  
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //Configurando a requisição para a API
    this.http.
      get<Automovel[]>(
        "https://localhost:5001/api/automobile/listar"
      )
      // Executar a requisição
      .subscribe({
        next: (automoveis) => {
          //Executamos o que for necessário quando a requisição
          //for bem-sucedida
          this.automovel = automoveis;
        }
      });
  }

  remover(id: number): void {
      alert(`O id ${id} foi deletado!`);
    this.http.
      delete<Automovel>(
        (`https://localhost:5001/api/automobile/deletar/${id}`)
      )
      .subscribe({
        next: (automovel) => {
        
          this.ngOnInit();
        },
       
      });
  }

}