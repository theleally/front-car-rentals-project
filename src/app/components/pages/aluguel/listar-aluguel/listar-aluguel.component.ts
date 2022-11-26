import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Aluguel } from 'src/app/models/aluguel';
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
  selector: 'app-listar-aluguel',
  templateUrl: './listar-aluguel.component.html',
  styleUrls: ['./listar-aluguel.component.css']
})
export class ListarAluguelComponent implements OnInit {
  pedido!: Aluguel[];

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

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
     
  this.http.
    delete<Aluguel>(
      (`https://localhost:5001/api/rental/deletar/${id}`)
    )
    .subscribe({
      next: (aluguel) => {
        this._snackBar.open("Automóvel deletado!", "Ok!", {
          horizontalPosition: "center",
          verticalPosition: "top",
        });
        this.ngOnInit();
      },
     
    });
}

}