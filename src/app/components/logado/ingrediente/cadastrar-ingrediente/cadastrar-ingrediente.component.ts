import { Component, OnInit } from '@angular/core';
import { Ingrediente } from 'src/app/entities/ingrediente.model';
import { ContadoresService } from 'src/app/services/contadores/contadores.service';
import { IngredienteService } from 'src/app/services/ingrediente/ingrediente.service';

@Component({
  selector: 'app-cadastrar-ingrediente',
  templateUrl: './cadastrar-ingrediente.component.html',
  styleUrls: ['./cadastrar-ingrediente.component.scss']
})
export class CadastrarIngredienteComponent implements OnInit {

  ingrediente = {} as Ingrediente;

  constructor(
    private _ingredienteService: IngredienteService,
    private _conntadoresService: ContadoresService
  ) { }
  
  ngOnInit(): void {
  }

  salvarIngrediente(): void {
    this._ingredienteService.setIngrediente(this.ingrediente);
    this.resetaIngrediente();
    this._conntadoresService.updateIngrediente();
  }

  private resetaIngrediente(): void {
    this.ingrediente = {} as Ingrediente;
  }
}
