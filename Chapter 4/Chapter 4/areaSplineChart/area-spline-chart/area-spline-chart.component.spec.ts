import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaSplineChartComponent } from './area-spline-chart.component';

describe('AreaSplineChartComponent', () => {
  let component: AreaSplineChartComponent;
  let fixture: ComponentFixture<AreaSplineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaSplineChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaSplineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
