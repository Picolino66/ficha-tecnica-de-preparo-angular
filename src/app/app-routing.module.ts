import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastrarReceitaComponent } from './components/logado/receita/cadastrar-receita/cadastrar-receita.component';
import { HomeComponent } from './components/logado/home/home.component';
import { CriarContaComponent } from './components/nao-logado/criar-conta/criar-conta.component';
import { NaoLogadoComponent } from './components/nao-logado/nao-logado.component';
import { SalvarTabelaIngredienteFireStoreComponent } from './salvar-tabela-ingrediente-fire-store/salvar-tabela-ingrediente-fire-store.component';
import { ListarReceitasComponent } from './components/logado/receita/listar-receitas/listar-receitas.component';
import { CadastrarIngredienteComponent } from './components/logado/ingrediente/cadastrar-ingrediente/cadastrar-ingrediente.component';
import { ListarIngredientesComponent } from './components/logado/ingrediente/listar-ingredientes/listar-ingredientes.component';

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
    path: 'cadastrar-ingrediente',
    component: CadastrarIngredienteComponent
  },
  {
    path: 'listar-ingredientes',
    component: ListarIngredientesComponent
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
