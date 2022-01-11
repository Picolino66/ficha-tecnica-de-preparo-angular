import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredienteService {

  private ingredienteCollection: AngularFirestoreCollection;
  //urlToJson = 'assets/taco.json';

  constructor(
    private readonly firestore: AngularFirestore,
    //private http: HttpClient
  ){
    this.ingredienteCollection = firestore.collection('ingrediente');
  }

  async getTodosIngredientes(): Promise<Observable<any[]>>{
    return this.ingredienteCollection.snapshotChanges();
    //return this.http.get<any>(this.urlToJson);
  }

}
