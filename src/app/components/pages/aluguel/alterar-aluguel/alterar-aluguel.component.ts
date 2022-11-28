import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluguel } from 'src/app/models/aluguel';
import { Automovel } from 'src/app/models/automovel';
import { Cliente } from 'src/app/models/cliente';
import { MatSnackBar } from "@angular/material/snack-bar";
@Component({
  selector: 'app-alterar-aluguel',
  templateUrl: './alterar-aluguel.component.html',
  styleUrls: ['./alterar-aluguel.component.css']
})
export class AlterarAluguelComponent implements OnInit {
  

 clientId!: number;
  client!: Cliente[];
  automobileId!: number;
  automobile!: string;
  total_Days!: number;
  start_Date!: string;
  end_Date!: string;
  criadoEm!: string;
  mensagem!: string;
  rentalId!: number;
  total_Days_Price!: number;
  total_Price!: number;
  
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

      this.route.params.subscribe({
      next: (params) => {
        let { rentalId } = params;
        if (rentalId !== undefined) {
          this.http.get<Aluguel>(`https://localhost:5001/api/rental/buscar/${rentalId}`).subscribe({
            next: (aluguel) => {
              //implements the object to appear - WB
              this.rentalId = rentalId;
              this.clientId = aluguel?.clientId!;
              this.automobileId = aluguel?.automobileId!;
              this.total_Price=aluguel?.total_Price!;
              this.total_Days=aluguel?.total_Days!;
              this.total_Days_Price=aluguel?.total_Price!;
              this.start_Date=aluguel?.start_Date!;
              this.end_Date=aluguel?.end_Date!;
              this.criadoEm;
             
            },
          });
        }
      },
    });
  }


  alterar(): void {
    let rental: Aluguel = {
      clientId: this.clientId,
      automobileId: this.automobileId,
      total_Price: this.total_Price,
      total_Days: this.total_Days,
      total_Days_Price: this.total_Days_Price,
      start_Date: this.start_Date,
      end_Date: this.end_Date,
      criadoEm: this.criadoEm,
      rentalId: this.rentalId,
      
    };
    this.http.put<Aluguel>(`https://localhost:5001/api/rental/alterar/${this.rentalId}`, rental)//update rental using PUT and rentalId to update - WB
      
    .subscribe({
      next: (rental) => {     
        
        this._snackBar.open("Aluguel alterado!", "Ok!", {
          horizontalPosition: "center",
          verticalPosition: "top",
        
        });
          this.router.navigate(["pages/aluguel/listar"]);
        },
        error: (error) => {
          //Executamos o que for necessário quando a requisição
          //for mal-sucedida
          if (error.status === 400) {
            this.mensagem = "Algum erro de validação aconteceu!";
          } else if (error.status === 0) {
            this.mensagem = "A sua API não está rodando!";
          }
         
        },
      });
  }
}

