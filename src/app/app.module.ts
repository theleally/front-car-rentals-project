import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CadastrarClienteComponent } from './components/pages/cliente/cadastrar-cliente/cadastrar-cliente.component';
import { ListarClientesComponent } from './components/pages/cliente/listar-clientes/listar-clientes.component';
import { CadastrarAutomovelComponent } from './components/pages/automovel/cadastrar-automovel/cadastrar-automovel.component';
import { ListarAutomovelComponent } from './components/pages/automovel/listar-automovel/listar-automovel.component';
import { CadastrarAluguelComponent } from './components/pages/aluguel/cadastrar-aluguel/cadastrar-aluguel.component';
import { ListarAluguelComponent } from './components/pages/aluguel/listar-aluguel/listar-aluguel.component';

@NgModule({
  declarations: [AppComponent, CadastrarClienteComponent, ListarClientesComponent, CadastrarAutomovelComponent, ListarAutomovelComponent, CadastrarAluguelComponent, ListarAluguelComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
