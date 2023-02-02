import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatmapSeriesChartComponent } from './heatmap-series-chart.component';

describe('HeatmapSeriesChartComponent', () => {
  let component: HeatmapSeriesChartComponent;
  let fixture: ComponentFixture<HeatmapSeriesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeatmapSeriesChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeatmapSeriesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
