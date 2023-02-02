import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunnelChartComponent } from './funnel-chart.component';

describe('FunnelChartComponent', () => {
  let component: FunnelChartComponent;
  let fixture: ComponentFixture<FunnelChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunnelChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunnelChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
