import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularMaterialModule } from './angular-material.module';

import { NaoLogadoComponent } from './nao-logado/nao-logado.component';
import { CriarContaComponent } from './nao-logado/criar-conta/criar-conta.component';
import { NavComponent } from './logado/layout/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './logado/home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { SalvarTabelaIngredienteFireStoreComponent } from './salvar-tabela-ingrediente-fire-store/salvar-tabela-ingrediente-fire-store.component';
import { ListarReceitasComponent } from './logado/receita/listar-receitas/listar-receitas.component';
import { CadastrarReceitaComponent } from './logado/receita/cadastrar-receita/cadastrar-receita.component';
import { VisualizarReceitaComponent } from './logado/receita/visualizar-receita/visualizar-receita.component';


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
    VisualizarReceitaComponent
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
