import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineSeriesChartComponent } from './timeline-series-chart.component';

describe('TimelineSeriesChartComponent', () => {
  let component: TimelineSeriesChartComponent;
  let fixture: ComponentFixture<TimelineSeriesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineSeriesChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineSeriesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
