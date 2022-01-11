import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarTabelaIngredienteFireStoreComponent } from './salvar-tabela-ingrediente-fire-store.component';

describe('SalvarTabelaIngredienteFireStoreComponent', () => {
  let component: SalvarTabelaIngredienteFireStoreComponent;
  let fixture: ComponentFixture<SalvarTabelaIngredienteFireStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalvarTabelaIngredienteFireStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarTabelaIngredienteFireStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
