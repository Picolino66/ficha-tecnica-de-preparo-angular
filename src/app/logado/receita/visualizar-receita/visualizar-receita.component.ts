import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReceitaService } from '../../service/receita/receita.service';

@Component({
  selector: 'app-visualizar-receita',
  templateUrl: './visualizar-receita.component.html',
  styleUrls: ['./visualizar-receita.component.scss']
})
export class VisualizarReceitaComponent implements OnInit {

  constructor(
    private _receitaService: ReceitaService,
    public dialogRef: MatDialogRef<VisualizarReceitaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    /*this._receitaService.getReceita(this.data.id).then((doc: any) => {
      if (doc.exists) {
        let te = doc.data();
        console.log(te);
      }
    }).catch(error => {
      console.log("Error: ", error);
    });*/
  }

  cancelar(): void {
    this.dialogRef.close();
  }

}
