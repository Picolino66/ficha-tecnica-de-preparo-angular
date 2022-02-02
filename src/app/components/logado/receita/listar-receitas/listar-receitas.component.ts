import { Component, OnInit } from '@angular/core';
import { ReceitaService } from '../../../../services/receita/receita.service';

import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { VisualizarReceitaComponent } from '../visualizar-receita/visualizar-receita.component';

export interface TabelaReceitas {
  categoria: string;
  nome: string;
  grauDificuldade: string;
  id: string;
}

@Component({
  selector: 'app-listar-receitas',
  templateUrl: './listar-receitas.component.html',
  styleUrls: ['./listar-receitas.component.scss'],
})

export class ListarReceitasComponent implements OnInit {

  elementosTabela: TabelaReceitas[] = [];
  displayColunas = ['nome', 'categoria', 'grauDificuldade', 'acao'];
  
  TabelaReceitas: TabelaReceitas = {
    categoria: '',
    nome: '',
    grauDificuldade: '',
    id: ''
  };
  dataSource = new MatTableDataSource<TabelaReceitas>();
  
  constructor(
    private _receitaService: ReceitaService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.getReceitas();
  }

  getReceitas(){
    this._receitaService.getReceitas()
    .then((response) => response.subscribe(actions => {
      this.elementosTabela = [];
     actions.forEach( a => {
       let dados = a.payload.doc.data();
       dados.id = a.payload.doc.id;
       this.elementosTabela.push(dados as TabelaReceitas);
       this.dataSource = new MatTableDataSource(this.elementosTabela);
      });
    }));
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  abrirReceita(receita: any): void {
    const dialogRef = this.dialog.open(VisualizarReceitaComponent, {
      width: '700px',
      data: receita
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
