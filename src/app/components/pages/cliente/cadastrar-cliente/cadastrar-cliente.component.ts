import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { Cliente } from "src/app/models/cliente";

@Component({
  selector: "app-cadastrar-cliente",
  templateUrl: "./cadastrar-cliente.component.html",
  styleUrls: ["./cadastrar-cliente.component.css"],
})
export class CadastrarClienteComponent implements OnInit {
  clientId!:number;
  name!: string;
  cpf!: string;
  email!: string;
  cellphone!: string;
  mensagem!: string;
  

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private _snackBar: MatSnackBar)
  { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        let { clientId } = params;
        if (clientId !== undefined) {
          this.http.get<Cliente>(`https://localhost:5001/api/client/buscar/${clientId}`).subscribe({
            next: (cliente) => {
              this.clientId = clientId;
              this.name = cliente.name;
              this.cpf = cliente.cpf;
              this.email = cliente.email;
              this.cellphone = cliente.cellphone;
          

             

            },
          });
        }
      },
    });
  }

  alterar(): void {
    let cliente: Cliente = {
      clientId: this.clientId,
      name: this.name,
      email: this.email,
      cellphone: this.cellphone,
	    cpf: this.cpf,
    
    };
      this.http.put<Cliente>(`https://localhost:5001/api/client/alterar/${this.clientId}`, cliente).subscribe({ //update using PUT - WB
        next: (cliente) => {
          this._snackBar.open("Cliente alterado!", "Ok!", {
            horizontalPosition: "center",
            verticalPosition: "top",
          });
          this.router.navigate(["pages/cliente/listar"]);
     
        
        },
      });
    }
  cadastrar(): void {
    let cliente: Cliente = {
      clientId: this.clientId,
      cpf: this.cpf,
      name: this.name,
      email: this.email,
      cellphone: this.cellphone,
    };

    /*Configurando a requisi????o para a API*/
    this.http
      .post<Cliente>("https://localhost:5001/api/client/cadastrar", cliente)
      // Executar a requisi????o
      .subscribe({
        next: (cliente) => {
          this._snackBar.open("Cliente cadastrado!", "Ok!", {
            horizontalPosition: "center",
            verticalPosition: "top",
          });
          //Executamos o que for necess??rio quando a requisi????o
          //for bem-sucedida
          this.router.navigate(["pages/cliente/listar"]);
        },
        error: (error) => {
          //Executamos o que for necess??rio quando a requisi????o
          //for mal-sucedida
          if (error.status === 400) {
            this._snackBar.open("CPF j?? cadastrado", "Ok!", {
              horizontalPosition: "center",
              verticalPosition: "top",
            });
          } else if (error.status === 0) {
            this.mensagem = "A sua API n??o est?? rodando!";
          }
        },
      });
  }
}


