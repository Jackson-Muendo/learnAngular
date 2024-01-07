import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Num5Component } from './num5.component';

describe('Num5Component', () => {
  let component: Num5Component;
  let fixture: ComponentFixture<Num5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Num5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Num5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
