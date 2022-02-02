import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { NutrientesReceita } from 'src/app/entities/nutrientesReceita.model';
import { Receita } from 'src/app/entities/receita.model';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  private receitaCollection: AngularFirestoreCollection<Receita>;
  private nutrienteReceitaCollection: AngularFirestoreCollection<NutrientesReceita>;

  constructor(
    private readonly firestore: AngularFirestore,
  ){
    this.receitaCollection = firestore.collection<Receita>('receita');
    this.nutrienteReceitaCollection = firestore.collection<NutrientesReceita>('receita');
  }

  public setReceita(receita: Receita): string{
    const id = this.firestore.createId();
    this.receitaCollection.doc(id).set(receita);
    return id;
  }

  public setNutrientesReceita(nutrienteReceita: NutrientesReceita, idReceita: string){
    this.nutrienteReceitaCollection.doc(idReceita).update(nutrienteReceita)
  }

  public async getReceitas(): Promise<Observable<any[]>> {
    return this.receitaCollection.snapshotChanges();
  }

  public async getReceita(id: string): Promise<any> {
    return this.receitaCollection.doc(id).ref.get();
  }
}
