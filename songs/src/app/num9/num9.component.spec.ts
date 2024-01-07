import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Num9Component } from './num9.component';

describe('Num9Component', () => {
  let component: Num9Component;
  let fixture: ComponentFixture<Num9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Num9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Num9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
