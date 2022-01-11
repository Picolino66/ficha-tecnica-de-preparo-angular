import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastrarReceitaComponent } from './logado/receita/cadastrar-receita/cadastrar-receita.component';
import { HomeComponent } from './logado/home/home.component';
import { CriarContaComponent } from './nao-logado/criar-conta/criar-conta.component';
import { NaoLogadoComponent } from './nao-logado/nao-logado.component';
import { SalvarTabelaIngredienteFireStoreComponent } from './salvar-tabela-ingrediente-fire-store/salvar-tabela-ingrediente-fire-store.component';
import { ListarReceitasComponent } from './logado/receita/listar-receitas/listar-receitas.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: NaoLogadoComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'criar-conta',
    component: CriarContaComponent
  },
  {
    path: 'cadastrar-receita',
    component: CadastrarReceitaComponent
  },
  {
    path: 'listar-receitas',
    component: ListarReceitasComponent
  },
  {
    path: 'gambiarra',
    component: SalvarTabelaIngredienteFireStoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
