import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFinalizaComponent } from './button-finaliza.component';

describe('ButtonFinalizaComponent', () => {
  let component: ButtonFinalizaComponent;
  let fixture: ComponentFixture<ButtonFinalizaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonFinalizaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonFinalizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
