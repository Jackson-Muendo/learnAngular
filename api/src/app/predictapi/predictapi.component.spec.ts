import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictapiComponent } from './predictapi.component';

describe('PredictapiComponent', () => {
  let component: PredictapiComponent;
  let fixture: ComponentFixture<PredictapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictapiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredictapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
