import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Cliente } from "src/app/models/cliente";

@Component({
  selector: "app-cadastrar-cliente",
  templateUrl: "./cadastrar-cliente.component.html",
  styleUrls: ["./cadastrar-cliente.component.css"],
})
export class CadastrarClienteComponent implements OnInit {
  nome!: string;
  cpf!: string;
  soma!: number;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log("Inicializamos o componente!");
  }

  cadastrar(): void {
    let cliente: Cliente = {
      name: this.nome,
      cpf: this.cpf,
      email: "pedrinho@pedrinho.com",
      cellphone: "(DDD)999999999",
    };

    //Configurando a requisição para a API
    this.http
      .post<Cliente>("https://localhost:5001/api/client/cadastrar", cliente)
      // Executar a requisição
      .subscribe({
        next: (cliente) => {
          //Executamos o que for necessário quando a requisição
          //for bem-sucedida
          console.log("Gravamos um cliente", cliente);
        },
      });
  }
}
