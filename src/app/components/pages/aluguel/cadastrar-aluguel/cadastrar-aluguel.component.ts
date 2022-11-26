import { HttpClient } from "@angular/common/http";
import { Aluguel } from 'src/app/models/aluguel';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { Automovel} from 'src/app/models/automovel';
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-cadastrar-aluguel',
  templateUrl: './cadastrar-aluguel.component.html',
  styleUrls: ['./cadastrar-aluguel.component.css']
})
export class CadastrarAluguelComponent implements OnInit {
  clientId!: number;
  client!: Cliente[];
  automobileId!: number;
  automobile!: Automovel[];
  total_Days!: number;
  start_Date!: string;
  end_Date!: string;
  criadoEm!: string;
  mensagem!: string;
  rentalId!: number;
  total_Days_Price!: number;
  total_Price!: number;
  
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.http.get<Cliente[]>("https://localhost:5001/api/client/listar").subscribe({
      next: (clientes) => {
        this.client = clientes;
   
      },
    });
    this.http.get<Automovel[]>("https://localhost:5001/api/automobile/listar").subscribe({
      next: (automoveis) => {
        this.automobile  = automoveis;
   
      },
    });

    this.route.params.subscribe({
      next: (params) => {
        let { rentalId } = params;
        if (rentalId !== undefined) {
          this.http.get<Aluguel>(`https://localhost:5001/api/rental/buscar/${rentalId}`).subscribe({
            next: (aluguel) => {
              this.rentalId = rentalId;
              this.clientId = aluguel.clientId;
              this.automobileId = aluguel.automobileId;
              this.total_Price;
              this.total_Days;
              this.total_Days_Price;
              this.start_Date;
              this.end_Date;
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
      
    };
    this.http.patch<Aluguel>("https://localhost:5001/api/rental/alterar", rental).subscribe({
      next: (rental) => {
        this.router.navigate(["pages/aluguel/listar"]);
        this.ngOnInit();
        
      },
    });
  }
 
  cadastrar(): void {


    let aluguel: Aluguel = {
      clientId: this.clientId,
      automobileId: this.automobileId,
      total_Price: this.total_Price,
      total_Days: this.total_Days,
      end_Date: this.end_Date,
      criadoEm: this.criadoEm,
      total_Days_Price: this.total_Days_Price,
      start_Date: this.start_Date,
      
    };

    /*Configurando a requisição para a API*/

	
    this.http
      .post<Aluguel>("https://localhost:5001/api/rental/cadastrar", aluguel)
      // Executar a requisição
      .subscribe({
        next: (aluguel) => {

          //Executamos o que for necessário quando a requisição
          //for bem-sucedida

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

