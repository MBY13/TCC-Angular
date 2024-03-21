import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCadastroComponent } from './criar-cadastro.component';

describe('CriarCadastroComponent', () => {
  let component: CriarCadastroComponent;
  let fixture: ComponentFixture<CriarCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
