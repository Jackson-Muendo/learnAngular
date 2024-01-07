import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Num8Component } from './num8.component';

describe('Num8Component', () => {
  let component: Num8Component;
  let fixture: ComponentFixture<Num8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Num8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Num8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
