import { HttpClient } from "@angular/common/http";
import { Aluguel } from 'src/app/models/aluguel';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { Automovel} from 'src/app/models/automovel';

@Component({
  selector: 'app-cadastrar-aluguel',
  templateUrl: './cadastrar-aluguel.component.html',
  styleUrls: ['./cadastrar-aluguel.component.css']
})
export class CadastrarAluguelComponent implements OnInit {
  clientId!: number;
  client!: Cliente;
  automobileId!: number;
  automobile!: Automovel;
  total_price!: number;
  total_days!: number;
  price_per_day!: number;
  start_date!: string;
  end_date!: string;
  criadoEm!: string;
  
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  cadastrar(): void {
    let aluguel: Aluguel = {
      clientId: this.clientId,
      client: this.client,
      automobileId: this.automobileId,
      automobile: this.automobile,
      total_price: this.total_price,
      total_days: this.total_days,
      price_per_day: this.price_per_day,
      start_date: this.start_date,
      end_date: this.end_date,
      criadoEm: this.criadoEm,
     
    };

    //Configurando a requisição para a API
    this.http
      .post<Aluguel>("https://localhost:5001/api/rental/cadastrar", aluguel)
      // Executar a requisição
      .subscribe({
        next: (alugueis) => {
          //Executamos o que for necessário quando a requisição
          //for bem-sucedida
          console.log("Gravamos um pedido", alugueis);
        },
      });
  }
}


