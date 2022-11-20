import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Automovel } from 'src/app/models/automovel';
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
  selector: 'app-listar-automovel',
  templateUrl: './listar-automovel.component.html',
  styleUrls: ['./listar-automovel.component.css']
 
})
  
export class ListarAutomovelComponent implements OnInit {
  automovel!: Automovel[];
  id!: number;

  
  

  constructor(private http: HttpClient,private _snackBar: MatSnackBar) { }

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
     
    this.http.
      delete<Automovel>(
        (`https://localhost:5001/api/automobile/deletar/${id}`)
      )
      .subscribe({
        next: (automovel) => {
          this._snackBar.open("Automóvel deletado!", "Ok!", {
            horizontalPosition: "center",
            verticalPosition: "top",
          });
          this.ngOnInit();
        },
       
      });
  }

}