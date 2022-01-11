import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-salvar-tabela-ingrediente-fire-store',
  templateUrl: './salvar-tabela-ingrediente-fire-store.component.html',
  styleUrls: ['./salvar-tabela-ingrediente-fire-store.component.scss']
})
export class SalvarTabelaIngredienteFireStoreComponent implements OnInit {

  result: any;
  urlToJson = 'assets/taco.json';

  constructor(
    private readonly firestore: AngularFirestore,
    public http: HttpClient
    ) { }

  ngOnInit(): void {
    this.http.get<any>(this.urlToJson).subscribe(response => {
      this.result = response;
      this.result.forEach((element: unknown) => {
      this.firestore.collection('ingrediente').doc(this.firestore.createId()).set(element);
      });
    });
  }

}
