import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Num3Component } from './num3.component';

describe('Num3Component', () => {
  let component: Num3Component;
  let fixture: ComponentFixture<Num3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Num3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Num3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
