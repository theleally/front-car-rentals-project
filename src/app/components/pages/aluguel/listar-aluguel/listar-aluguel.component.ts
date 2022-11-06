import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Aluguel } from 'src/app/models/aluguel';

@Component({
  selector: 'app-listar-aluguel',
  templateUrl: './listar-aluguel.component.html',
  styleUrls: ['./listar-aluguel.component.css']
})
export class ListarAluguelComponent implements OnInit {
  pedido!: Aluguel[];
  id!: number;

  
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //Configurando a requisição para a API
    this.http.
      get<Aluguel[]>(
        "https://localhost:5001/api/rental/listar"
      )
      // Executar a requisição
      .subscribe({
        next: (pedidos) => {
          //Executamos o que for necessário quando a requisição
          //for bem-sucedida
          this.pedido = pedidos;
        }
      });
  }

  remover(id: number): void {
      alert(`O pedido ${id} foi deletado!`);
    this.http.
      delete<Aluguel>(
        (`https://localhost:5001/api/rental/deletar/${id}`)
      )
      .subscribe({
        next: (pedido) => {
        
          this.ngOnInit();
        },
       
      });
  }

}
