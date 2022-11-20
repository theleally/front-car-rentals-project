import { Cliente } from "./cliente";
import { Automovel } from "./automovel";
export interface Aluguel {
  rentalId?: number;
  clientId: number;
  client?: Cliente;
  automobileId: number;
  automobile?: Automovel;
  total_Price?: number;
  total_Days?: number;
  start_Date?: string;
  end_Date?: string;
  criadoEm?: string;
  total_Days_Price?: number;
}
