import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CadastrarClienteComponent } from "./components/pages/cliente/cadastrar-cliente/cadastrar-cliente.component";
import { ListarClientesComponent } from "./components/pages/cliente/listar-clientes/listar-clientes.component";
import { CadastrarAutomovelComponent } from "./components/pages/automovel/cadastrar-automovel/cadastrar-automovel.component";
import { ListarAutomovelComponent } from "./components/pages/automovel/listar-automovel/listar-automovel.component";
import { CadastrarAluguelComponent } from "./components/pages/aluguel/cadastrar-aluguel/cadastrar-aluguel.component";
import { ListarAluguelComponent } from "./components/pages/aluguel/listar-aluguel/listar-aluguel.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSnackBarModule } from "@angular/material/snack-bar";



@NgModule({
  declarations: [
    AppComponent,
    CadastrarClienteComponent,
    ListarClientesComponent,
    CadastrarAutomovelComponent,
    ListarAutomovelComponent,
    CadastrarAluguelComponent,
    ListarAluguelComponent,

 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatListModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
