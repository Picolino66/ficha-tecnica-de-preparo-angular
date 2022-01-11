import { PrePreparoIngrediente } from "./prepreparo.model";

export interface Receita {
  id?: number;
  nome: string;
  prePreparoIngredientes: PrePreparoIngrediente[];
  preparacao: string;
  grauDificuldade: string;
  tempoPreparo: string;
  categoria: string;
  rendimentoGrama: number;
  numeroPorcoes: number;
  pesoPorcaoGrama: number;
  imagem?: File;
}
