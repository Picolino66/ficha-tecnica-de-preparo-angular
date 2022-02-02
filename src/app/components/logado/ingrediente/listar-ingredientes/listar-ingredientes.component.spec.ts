import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarIngredientesComponent } from './listar-ingredientes.component';

describe('ListarIngredientesComponent', () => {
  let component: ListarIngredientesComponent;
  let fixture: ComponentFixture<ListarIngredientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarIngredientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarIngredientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
