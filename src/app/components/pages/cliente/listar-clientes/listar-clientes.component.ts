import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { MatSnackBar } from "@angular/material/snack-bar";
@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {
  clientes!: Cliente[];


  
  

  constructor(private http: HttpClient,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    //Configurando a requisição para a API
    this.http.
      get<Cliente[]>(
        "https://localhost:5001/api/client/listar"
      )
      // Executar a requisição
      .subscribe({
        next: (cliente) => {
          //Executamos o que for necessário quando a requisição
          //for bem-sucedida
          this.clientes = cliente;
        }
      });
  }

  remover(id: number): void {
      this.http.
      delete<Cliente>(
        (`https://localhost:5001/api/client/deletar/${id}`)
      )
      .subscribe({
        next: (cliente) => {
          this._snackBar.open("Automóvel deletado!", "Ok!", {
            horizontalPosition: "center",
            verticalPosition: "top",
          });
          this.ngOnInit();
        },
       
      });
  }

}