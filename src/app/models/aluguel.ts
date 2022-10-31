import { Cliente } from "src/app/models/cliente";
import { Automovel } from "./automovel";
export interface Aluguel {
  rentalId?: number;
  clientId: number;
  client: Cliente;
  automobileId: number;
  automobile: Automovel;
  total_price: number;
  total_days: string;
  start_date: string;
  end_date: string;
  criadoEm: string;
}
