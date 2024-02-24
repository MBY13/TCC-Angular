import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIntegracaoComponent } from './card-integracao.component';

describe('CardIntegracaoComponent', () => {
  let component: CardIntegracaoComponent;
  let fixture: ComponentFixture<CardIntegracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardIntegracaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardIntegracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
