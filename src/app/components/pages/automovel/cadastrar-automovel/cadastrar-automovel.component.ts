import { HttpClient } from "@angular/common/http";
import { Automovel } from 'src/app/models/automovel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-cadastrar-automovel',
  templateUrl: './cadastrar-automovel.component.html',
  styleUrls: ['./cadastrar-automovel.component.css']
})
export class CadastrarAutomovelComponent implements OnInit {
  type!: string;
  models!: string;
  brand!: string;
  year!: string;
  placa!:string;
  automobileId!: number;
  mensagem!: string;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private _snackBar: MatSnackBar)
  { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        let { automobileId } = params;
        if (automobileId !== undefined) {
          this.http.get<Automovel>(`https://localhost:5001/api/automobile/buscar/${automobileId}`).subscribe({
            next: (automovel) => {
              this.automobileId = automobileId;
              this.placa =automovel.placa;
              this.type = automovel.type;
              this.models = automovel.models;
              this.brand = automovel.brand;
              this.year = automovel.year;

             

            },
          });
        }
      },
    });
  }

  alterar(): void {
    let automovel: Automovel = {
      automobileId: this.automobileId,
      type: this.type,
      models: this.models,
      brand: this.brand,
      year: this.year,
      placa: this.placa,
    };
      this.http.put<Automovel>(`https://localhost:5001/api/automobile/alterar/${this.automobileId}`, automovel).subscribe({//update using PUT - WB
        next: (automovel) => {
          this._snackBar.open("Automóvel alterado!", "Ok!", {
            horizontalPosition: "center",
            verticalPosition: "top",
          });

          this.router.navigate(["pages/automovel/listar"]);
        },
          error: (error) => {
            this._snackBar.open("Automóvel cadastrado!", "Ok!", {
              horizontalPosition: "center",
              verticalPosition: "top",
            });
            //Executamos o que for necessário quando a requisição
            //for mal-sucedida
            if (error.status === 400) {
              this._snackBar.open("A placa deve conter 8 dígitos!", "Ok!", {
                horizontalPosition: "center",
                verticalPosition: "top",
              
              });
            } else if (error.status === 0) {
              this.mensagem = "A sua API não está rodando!";
            }
     
        
        },
      });
    }
  cadastrar(): void {
    let automovel: Automovel = {
      automobileId: this.automobileId,
      type: this.type,
      models: this.models,
      brand: this.brand,
      year: this.year,
      placa: this.placa,
    };

    /*Configurando a requisição para a API*/
    this.http
      .post<Automovel>("https://localhost:5001/api/automobile/cadastrar", automovel)
      // Executar a requisição
      .subscribe({
        next: (automovel) => {
          this._snackBar.open("Automóvel cadastrado!", "Ok!", {
            horizontalPosition: "center",
            verticalPosition: "top",
          });
          
          
          
          //Executamos o que for necessário quando a requisição
          //for bem-sucedida
          this.router.navigate(["pages/automovel/listar"]);
        },
        error: (error) => {
          this._snackBar.open("Automóvel cadastrado!", "Ok!", {
            horizontalPosition: "center",
            verticalPosition: "top",
          });
          //Executamos o que for necessário quando a requisição
          //for mal-sucedida
          if (error.status === 400) {
            this._snackBar.open("A placa deve conter 8 dígitos!", "Ok!", {
              horizontalPosition: "center",
              verticalPosition: "top",
            
            });
          } else if (error.status === 0) {
            this.mensagem = "A sua API não está rodando!";
          }
        },
      });
  }
}


