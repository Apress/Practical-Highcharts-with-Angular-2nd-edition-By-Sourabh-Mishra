import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashLineChartComponent } from './dash-line-chart.component';

describe('DashLineChartComponent', () => {
  let component: DashLineChartComponent;
  let fixture: ComponentFixture<DashLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashLineChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
