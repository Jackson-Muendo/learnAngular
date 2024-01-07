import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Num7Component } from './num7.component';

describe('Num7Component', () => {
  let component: Num7Component;
  let fixture: ComponentFixture<Num7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Num7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Num7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
