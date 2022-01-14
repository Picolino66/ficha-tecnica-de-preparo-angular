import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContadoresService {

  private contadores: AngularFirestoreCollection;

  constructor(
    private readonly firestore: AngularFirestore
  ) {
    this.contadores = firestore.collection('contadores');
  }

  public async getContadores(): Promise<any>{
    return this.contadores.doc('vIilR2aeE9KsTSZmWx0f').ref.get();;
  }

  public updateIngrediente(){
    this.getContadores()
    .then((doc: any) => {
      if (doc.exists) {
        let x = doc.data();
        this.contadores.doc('vIilR2aeE9KsTSZmWx0f').update({contIngredientesCadastrados: x.contIngredientesCadastrados+1})
      }
    }).catch(error => {
      console.log("Error: ", error);
    });
  }

  public updateReceita(){
    this.getContadores()
    .then((doc: any) => {
      if (doc.exists) {
        let x = doc.data();
        this.contadores.doc('vIilR2aeE9KsTSZmWx0f').update({contReceitas: x.contReceitas+1})
      }
    }).catch(error => {
      console.log("Error: ", error);
    });
  }

}
