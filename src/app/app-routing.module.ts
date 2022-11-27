import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastrarClienteComponent } from "./components/pages/cliente/cadastrar-cliente/cadastrar-cliente.component";
import { ListarClientesComponent } from "./components/pages/cliente/listar-clientes/listar-clientes.component";
import { CadastrarAutomovelComponent } from "./components/pages/automovel/cadastrar-automovel/cadastrar-automovel.component";
import { ListarAutomovelComponent } from "./components/pages/automovel/listar-automovel/listar-automovel.component";
import { CadastrarAluguelComponent } from "./components/pages/aluguel/cadastrar-aluguel/cadastrar-aluguel.component";
import { ListarAluguelComponent } from "./components/pages/aluguel/listar-aluguel/listar-aluguel.component";
import { AlterarAluguelComponent } from "./components/pages/aluguel/alterar-aluguel/alterar-aluguel.component";

const routes: Routes = [
  {
    path: "pages/cliente/cadastrar",
    component: CadastrarClienteComponent,
  },
  {
    path: "pages/cliente/cadastrar/:clientId",
    component: CadastrarClienteComponent,
  },
  {
    path: "pages/cliente/listar",
    component: ListarClientesComponent,
  },
  {
    path: "pages/automovel/cadastrar",
    component: CadastrarAutomovelComponent,
  },
  {
    path: "pages/automovel/cadastrar/:automobileId",
    component: CadastrarAutomovelComponent,
  },
  {
    path: "pages/automovel/listar",
    component: ListarAutomovelComponent,
  },
  {
    path: "pages/aluguel/cadastrar",
    component: CadastrarAluguelComponent,
  },
  {
    path: "pages/aluguel/alterar",
    component: AlterarAluguelComponent
  },
  {
    path: "pages/aluguel/alterar/:rentalId",
    component: AlterarAluguelComponent
  },
  {
    path: "pages/aluguel/listar",
    component: ListarAluguelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
