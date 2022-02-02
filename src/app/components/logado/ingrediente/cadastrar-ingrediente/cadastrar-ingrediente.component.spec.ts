import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarIngredienteComponent } from './cadastrar-ingrediente.component';

describe('CadastrarIngredienteComponent', () => {
  let component: CadastrarIngredienteComponent;
  let fixture: ComponentFixture<CadastrarIngredienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarIngredienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarIngredienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
