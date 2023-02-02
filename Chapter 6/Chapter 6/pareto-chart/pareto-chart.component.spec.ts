import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParetoChartComponent } from './pareto-chart.component';

describe('ParetoChartComponent', () => {
  let component: ParetoChartComponent;
  let fixture: ComponentFixture<ParetoChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParetoChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParetoChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
