import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Ingrediente } from 'src/app/entities/ingrediente.model';

@Injectable({
  providedIn: 'root'
})
export class IngredienteService {

  private ingredienteCollection: AngularFirestoreCollection;
  private ingredienteCadastradosCollection: AngularFirestoreCollection<Ingrediente>;
  //urlToJson = 'assets/taco.json';

  constructor(
    private readonly firestore: AngularFirestore,
    //private http: HttpClient
  ){
    this.ingredienteCollection = firestore.collection('ingrediente');
    this.ingredienteCadastradosCollection = firestore.collection('ingredienteCadastrados');
  }

  public async getTodosIngredientes(): Promise<Observable<any[]>>{
    return this.ingredienteCollection.snapshotChanges();
    //return this.http.get<any>(this.urlToJson);
  }

  public setIngrediente(ingrediente: Ingrediente) {
    const id = this.firestore.createId();
    this.ingredienteCadastradosCollection.doc(id).set(ingrediente);
  }

}
