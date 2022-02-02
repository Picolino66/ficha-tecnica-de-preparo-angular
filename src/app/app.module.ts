import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './angular-material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { NaoLogadoComponent } from './components/nao-logado/nao-logado.component';
import { CriarContaComponent } from './components/nao-logado/criar-conta/criar-conta.component';
import { NavComponent } from './layout/nav/nav.component';
import { HomeComponent } from './components/logado/home/home.component';
import { SalvarTabelaIngredienteFireStoreComponent } from './salvar-tabela-ingrediente-fire-store/salvar-tabela-ingrediente-fire-store.component';
import { ListarReceitasComponent } from './components/logado/receita/listar-receitas/listar-receitas.component';
import { CadastrarReceitaComponent } from './components/logado/receita/cadastrar-receita/cadastrar-receita.component';
import { VisualizarReceitaComponent } from './components/logado/receita/visualizar-receita/visualizar-receita.component';
import { CadastrarIngredienteComponent } from './components/logado/ingrediente/cadastrar-ingrediente/cadastrar-ingrediente.component';
import { ListarIngredientesComponent } from './components/logado/ingrediente/listar-ingredientes/listar-ingredientes.component';


@NgModule({
  declarations: [
    AppComponent,
    NaoLogadoComponent,
    CriarContaComponent,
    NavComponent,
    HomeComponent,
    CadastrarReceitaComponent,
    SalvarTabelaIngredienteFireStoreComponent,
    ListarReceitasComponent,
    VisualizarReceitaComponent,
    CadastrarIngredienteComponent,
    ListarIngredientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    LayoutModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
