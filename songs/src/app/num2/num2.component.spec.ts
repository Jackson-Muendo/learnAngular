import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Num2Component } from './num2.component';

describe('Num2Component', () => {
  let component: Num2Component;
  let fixture: ComponentFixture<Num2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Num2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Num2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
