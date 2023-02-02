import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyliderChartComponent } from './cylider-chart.component';

describe('CyliderChartComponent', () => {
  let component: CyliderChartComponent;
  let fixture: ComponentFixture<CyliderChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyliderChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CyliderChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
