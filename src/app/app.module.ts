import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CadastrarClienteComponent } from './components/pages/cliente/cadastrar-cliente/cadastrar-cliente.component';
import { ListarClientesComponent } from './components/pages/cliente/listar-clientes/listar-clientes.component';

@NgModule({
  declarations: [AppComponent, CadastrarClienteComponent, ListarClientesComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
