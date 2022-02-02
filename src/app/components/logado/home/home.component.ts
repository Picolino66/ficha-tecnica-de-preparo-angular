import { Component } from '@angular/core';
import { ContadoresService } from '../../../services/contadores/contadores.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  ingredientesSistema: number = 0;
  ingredientes: number = 0;
  receitas: number = 0;

  constructor(
    private _contador: ContadoresService
    ) { }

  ngOnInit(): void {
    this.getContadores();
  }

  getContadores(){
    this._contador.getContadores()
      .then((doc: any) => {
        if (doc.exists) {
          let x = doc.data();
          this.ingredientesSistema = x.contIngredientesSistema;
          this.ingredientes = x.contIngredientesCadastrados;
          this.receitas = x.contReceitas;
        }
      }).catch(error => {
        console.log("Error: ", error);
      });
  }

}
