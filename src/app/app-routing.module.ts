import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastrarClienteComponent } from "./components/pages/cliente/cadastrar-cliente/cadastrar-cliente.component";
import { ListarClientesComponent } from "./components/pages/cliente/listar-clientes/listar-clientes.component";

const routes: Routes = [
  {
    path: "pages/cliente/cadastrar",
    component: CadastrarClienteComponent,
  },
  {
    path: "pages/cliente/listar",
    component: ListarClientesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
