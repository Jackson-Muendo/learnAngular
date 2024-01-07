import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Num6Component } from './num6.component';

describe('Num6Component', () => {
  let component: Num6Component;
  let fixture: ComponentFixture<Num6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Num6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Num6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
