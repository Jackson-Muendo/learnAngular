import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Num10Component } from './num10.component';

describe('Num10Component', () => {
  let component: Num10Component;
  let fixture: ComponentFixture<Num10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Num10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Num10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
