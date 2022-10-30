import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Cliente } from "src/app/models/cliente";

@Component({
  selector: "app-listar-clientes",
  templateUrl: "./listar-clientes.component.html",
  styleUrls: ["./listar-clientes.component.css"],
})
export class ListarClientesComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    //Configurando a requisição para a API
    this.http
      .get<Cliente[]>("https://localhost:5001/api/client/listar")
      // Executar a requisição
      .subscribe({
        next: (clientes) => {
          //Executamos o que for necessário quando a requisição
          //for bem-sucedida
          console.table(clientes);
        },
      });
  }
}
