import { HttpClient } from "@angular/common/http";
import { Automovel } from 'src/app/models/automovel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-automovel',
  templateUrl: './cadastrar-automovel.component.html',
  styleUrls: ['./cadastrar-automovel.component.css']
})
export class CadastrarAutomovelComponent implements OnInit {
  type!: string;
  models!: string;
  brand!: string;
  price_per_day!: number;
  year!: string;
  placa!:string;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  cadastrar(): void {
    let automovel: Automovel = {
      type: this.type,
      models: this.models,
      brand: this.brand,
      price_per_day: this.price_per_day,
      year: this.year,
      placa: this.placa,
    };

    /*Configurando a requisição para a API*/
    this.http
      .post<Automovel>("https://localhost:5001/api/automobile/cadastrar", automovel)
      // Executar a requisição
      .subscribe({
        next: (automovel) => {
          //Executamos o que for necessário quando a requisição
          //for bem-sucedida
          console.log("Gravamos um automóvel", automovel);
        },
      });
  }
}


