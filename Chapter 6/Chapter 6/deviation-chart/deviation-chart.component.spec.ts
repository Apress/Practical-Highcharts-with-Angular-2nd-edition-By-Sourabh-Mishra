import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviationChartComponent } from './deviation-chart.component';

describe('DeviationChartComponent', () => {
  let component: DeviationChartComponent;
  let fixture: ComponentFixture<DeviationChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviationChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
