import { Component, OnInit } from '@angular/core';
import { Receita } from 'src/app/entities/receita.model';
import { PrePreparoIngrediente } from 'src/app/entities/prepreparo.model';
import { ReceitaService } from '../../../../services/receita/receita.service';
import { IngredienteService } from '../../../../services/ingrediente/ingrediente.service';
import { IngredienteNomeId } from 'src/app/entities/ingredienteNomeId.model';
import { NutrientesReceita } from 'src/app/entities/nutrientesReceita.model';
import { ContadoresService } from 'src/app/services/contadores/contadores.service';
@Component({
  selector: 'app-cadastrar-receita',
  templateUrl: './cadastrar-receita.component.html',
  styleUrls: ['./cadastrar-receita.component.scss']
})
export class CadastrarReceitaComponent implements OnInit {
  receita: Receita = {
      nome: '',
      prePreparoIngredientes: [],
      preparacao: '',
      grauDificuldade: '',
      tempoPreparo: '',
      categoria: '',
      rendimentoGrama: 0,
      numeroPorcoes: 0,
      pesoPorcaoGrama: 0
  };

  prePreparoIngrediente: PrePreparoIngrediente = {
      ingrediente: '',
      ingredienteId: '',
      prePreparo: '',
      medidaCaseira: '',
      pesoBruto: 0,
      pesoLiquido: 0,
      preco: 0,
      fatorCorrecao: 0,
  }

  varMostrarPrePreparoIngrediente: PrePreparoIngrediente = {
      ingrediente: '',
      ingredienteId: '',
      prePreparo: '',
      medidaCaseira: '',
      pesoBruto: 0,
      pesoLiquido: 0,
      preco: 0,
      fatorCorrecao: 0,
  }

  mostrarPPI: boolean = false;
  indexAtual: number = -1;
  ingredientesGet: any = [];

  ingredientesNomeId: IngredienteNomeId[] = [];
  auxIngredienteNomeid: IngredienteNomeId = {
      nome: '',
      id: ''
  }

  nutrientesReceita: NutrientesReceita = {
    pesoLiquido: 0,
    energia: 0,
    carboidrato: 0,
    proteina: 0,
    lipideo: 0,
    gorduraSaturada: 0,
    fibra: 0,
    sodio: 0,
    gorduraTrans: 0,
    energiaJaule: 0,
    kCarboidrato: 0,
    kProteina: 0,
    kLipideo: 0,
    kGorduraSaturada: 0,
    vctCarboidrato: 0,
    vctProteina: 0,
    vctLipideo: 0,
    vctGorduraSaturada: 0,
    rendimentoPorc: 0,
    fatorCoccao: 0,
    custoPorc: 0,
    vdEnergia: 0,
    vdCarboidrato: 0,
    vdProteina: 0,
    vdLipideo: 0,
    vdGorduraSaturada: 0,
    vdFibra: 0,
    vdSodio: 0,
    preco: 0,
    kGorduraTrans: 0,
  };

ingredientesListaFiltrado: any;

  constructor(
    private _receitaService: ReceitaService,
    private _ingredienteService: IngredienteService,
    private _contadoresService: ContadoresService
  ){}

  ngOnInit(): void {
    this.getIngredientes();
  }

  getIngredientes() {
    this._ingredienteService.getTodosIngredientes()
      .then((response) => response.subscribe(actions => {
        actions.forEach( (a: any) => {
          let auxIngredienteNomeid: IngredienteNomeId = {id:'', nome:''};
          auxIngredienteNomeid.id = a.payload.doc.id;
          auxIngredienteNomeid.nome = a.payload.doc.data().Nome;
          this.ingredientesGet.push(a.payload.doc.data());
          this.ingredientesNomeId.push(auxIngredienteNomeid);
        });
    }));
  }

  async modelChangeFn(e: string) {
    await this._filter(e);
  }

  private async _filter(value: string) {
    const filterValue = value.toLowerCase();
    this.ingredientesListaFiltrado = await this.ingredientesNomeId.filter((option: any) => option.nome.toLowerCase().includes(filterValue));
  }

  async salvarReceita(): Promise<void> {
    this.calcularNutrientes();
    let idReceita = this._receitaService.setReceita(this.receita);
    this.resetaReceita();
    await this._receitaService.setNutrientesReceita(this.nutrientesReceita, idReceita)
    this.resetaNutrientesReceita();
    this._contadoresService.updateReceita();
  }

  adicionarIngrediente(): void {
    this.prePreparoIngrediente.ingredienteId = this.ingredientesNomeId.find(x => x.nome === this.prePreparoIngrediente.ingrediente)?.id;
    this.receita.prePreparoIngredientes.push(this.prePreparoIngrediente);
    this.resetaPrePreparoIngrediente();
  }

  atualizarIngrediente(index: any): void {
    this.varMostrarPrePreparoIngrediente.ingredienteId = this.ingredientesNomeId.find(x => x.nome === this.varMostrarPrePreparoIngrediente.ingrediente)?.id;
    this.receita.prePreparoIngredientes[index] = {
      ingrediente: this.varMostrarPrePreparoIngrediente.ingrediente,
      ingredienteId: this.varMostrarPrePreparoIngrediente.ingredienteId,
      prePreparo: this.varMostrarPrePreparoIngrediente.prePreparo,
      medidaCaseira: this.varMostrarPrePreparoIngrediente.medidaCaseira,
      pesoBruto: this.varMostrarPrePreparoIngrediente.pesoBruto,
      pesoLiquido: this.varMostrarPrePreparoIngrediente.pesoLiquido,
      preco: this.varMostrarPrePreparoIngrediente.preco,
      fatorCorrecao: this.varMostrarPrePreparoIngrediente.pesoBruto /this.varMostrarPrePreparoIngrediente.pesoLiquido,
    }
  }

  resetaPrePreparoIngrediente(): void {
    this.prePreparoIngrediente = {
      ingrediente: '',
      prePreparo: '',
      medidaCaseira: '',
      pesoBruto: 0,
      pesoLiquido: 0,
      preco: 0,
      fatorCorrecao: 0,
    }
  }

  mostrarPrePreparoIngrediente(index: any): void {
    if (this.indexAtual == index) {
      this.mostrarPPI = false;
      this.indexAtual = -1;
    }
    else{
      this.mostrarPPI = true;
      this.indexAtual = index;
      this.varMostrarPrePreparoIngrediente = {
        ingrediente: this.receita.prePreparoIngredientes[index].ingrediente,
        prePreparo: this.receita.prePreparoIngredientes[index].prePreparo,
        medidaCaseira: this.receita.prePreparoIngredientes[index].medidaCaseira,
        pesoBruto: this.receita.prePreparoIngredientes[index].pesoBruto,
        pesoLiquido: this.receita.prePreparoIngredientes[index].pesoLiquido,
        preco: this.receita.prePreparoIngredientes[index].preco,
        fatorCorrecao: this.receita.prePreparoIngredientes[index].pesoBruto / this.receita.prePreparoIngredientes[index].pesoLiquido
      }
    }
  }

  resetaReceita(): void {
    this.receita = {
      nome: '',
      prePreparoIngredientes: [],
      preparacao: '',
      grauDificuldade: '',
      tempoPreparo: '',
      categoria: '',
      rendimentoGrama: 0,
      numeroPorcoes: 0,
      pesoPorcaoGrama: 0,
    };
  }

  resetaNutrientesReceita(): void {
    this.nutrientesReceita = {
      pesoLiquido: 0,
      energia: 0,
      carboidrato: 0,
      proteina: 0,
      lipideo: 0,
      gorduraSaturada: 0,
      fibra: 0,
      sodio: 0,
      gorduraTrans: 0,
      energiaJaule: 0,
      kCarboidrato: 0,
      kProteina: 0,
      kLipideo: 0,
      kGorduraSaturada: 0,
      vctCarboidrato: 0,
      vctProteina: 0,
      vctLipideo: 0,
      vctGorduraSaturada: 0,
      rendimentoPorc: 0,
      fatorCoccao: 0,
      custoPorc: 0,
      vdEnergia: 0,
      vdCarboidrato: 0,
      vdProteina: 0,
      vdLipideo: 0,
      vdGorduraSaturada: 0,
      vdFibra: 0,
      vdSodio: 0,
      preco: 0,
      kGorduraTrans: 0,
    };
  }

  async calcularNutrientes(){
    await this.receita.prePreparoIngredientes.forEach(x => {
      let prePreparoIngrediente = this.ingredientesGet.find((p: { Nome: string; }) => p.Nome === x.ingrediente);
      this.nutrientesReceita.energiaJaule += Number(((prePreparoIngrediente.EnergiaJaule * x.pesoLiquido)/100).toFixed(3));
      this.nutrientesReceita.carboidrato += Number(((prePreparoIngrediente.Carboidratototal * x.pesoLiquido)/100).toFixed(3));
      this.nutrientesReceita.proteina += Number(((prePreparoIngrediente.Proteína * x.pesoLiquido)/100).toFixed(3));
      this.nutrientesReceita.lipideo += Number(((prePreparoIngrediente.Lipídios * x.pesoLiquido)/100).toFixed(3));
      this.nutrientesReceita.gorduraSaturada += Number(((prePreparoIngrediente.Ácidosgraxossaturadas * x.pesoLiquido)/100).toFixed(3));
      this.nutrientesReceita.fibra += Number(((prePreparoIngrediente.FibraAlimentar * x.pesoLiquido)/100).toFixed(3));
      this.nutrientesReceita.sodio += Number(((prePreparoIngrediente.Sódio * x.pesoLiquido)/100).toFixed(3));
      this.nutrientesReceita.gorduraTrans += Number(((prePreparoIngrediente.Ácidosgraxosmonoinsaturados * x.pesoLiquido)/100).toFixed(3));
      this.nutrientesReceita.energia += Number(((prePreparoIngrediente.Energia * x.pesoLiquido)/100).toFixed(3));
      this.nutrientesReceita.pesoLiquido += x.pesoLiquido;
      this.nutrientesReceita.preco += Number(((x.preco * x.pesoBruto)/100).toFixed(3));
    });
    this.nutrientesReceita.kCarboidrato = this.nutrientesReceita.carboidrato * 4;
    this.nutrientesReceita.kProteina = this.nutrientesReceita.proteina * 4;
    this.nutrientesReceita.kLipideo = this.nutrientesReceita.lipideo * 9;
    this.nutrientesReceita.kGorduraSaturada = this.nutrientesReceita.gorduraSaturada * 9;
    this.nutrientesReceita.kGorduraTrans = this.nutrientesReceita.gorduraTrans * 9;
    this.nutrientesReceita.vctCarboidrato = this.nutrientesReceita.kCarboidrato*100/this.nutrientesReceita.energia;
    this.nutrientesReceita.vctProteina = this.nutrientesReceita.kProteina*100/this.nutrientesReceita.energia;
    this.nutrientesReceita.vctLipideo = this.nutrientesReceita.kLipideo*100/this.nutrientesReceita.energia;
    this.nutrientesReceita.vctGorduraSaturada = this.nutrientesReceita.kGorduraSaturada*100/this.nutrientesReceita.energia;
    this.nutrientesReceita.rendimentoPorc = this.receita.rendimentoGrama*100/this.nutrientesReceita.pesoLiquido;
    this.nutrientesReceita.fatorCoccao = this.nutrientesReceita.rendimentoPorc/100;

    this.nutrientesReceita.custoPorc = this.nutrientesReceita.preco/this.receita.numeroPorcoes;
    this.nutrientesReceita.energia = this.nutrientesReceita.energia/this.receita.pesoPorcaoGrama;
    this.nutrientesReceita.energiaJaule = this.nutrientesReceita.energiaJaule*4.184;
    this.nutrientesReceita.carboidrato = this.nutrientesReceita.carboidrato/this.receita.pesoPorcaoGrama;
    this.nutrientesReceita.proteina = this.nutrientesReceita.proteina/this.receita.pesoPorcaoGrama;
    this.nutrientesReceita.lipideo = this.nutrientesReceita.lipideo/this.receita.pesoPorcaoGrama;
    this.nutrientesReceita.gorduraSaturada = this.nutrientesReceita.gorduraSaturada/this.receita.pesoPorcaoGrama;
    this.nutrientesReceita.gorduraTrans = this.nutrientesReceita.gorduraTrans/this.receita.pesoPorcaoGrama;
    this.nutrientesReceita.fibra = this.nutrientesReceita.fibra/this.receita.pesoPorcaoGrama;
    this.nutrientesReceita.sodio = this.nutrientesReceita.sodio/this.receita.pesoPorcaoGrama;
    this.nutrientesReceita.vdEnergia = this.nutrientesReceita.energia*100/2000;
    this.nutrientesReceita.vdCarboidrato = this.nutrientesReceita.carboidrato*100/300;
    this.nutrientesReceita.vdProteina = this.nutrientesReceita.proteina*100/75;
    this.nutrientesReceita.vdLipideo = this.nutrientesReceita.lipideo*100/55;
    this.nutrientesReceita.vdGorduraSaturada = this.nutrientesReceita.gorduraSaturada*100/55;
    this.nutrientesReceita.vdFibra = this.nutrientesReceita.fibra*100/25;
    this.nutrientesReceita.vdSodio = this.nutrientesReceita.sodio*100/2400;
  }
}
