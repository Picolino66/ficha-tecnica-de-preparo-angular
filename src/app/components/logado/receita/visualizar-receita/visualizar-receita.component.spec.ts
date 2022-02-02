import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarReceitaComponent } from './visualizar-receita.component';

describe('VisualizarReceitaComponent', () => {
  let component: VisualizarReceitaComponent;
  let fixture: ComponentFixture<VisualizarReceitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarReceitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
