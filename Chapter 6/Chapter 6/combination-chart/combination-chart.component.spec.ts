import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinationChartComponent } from './combination-chart.component';

describe('CombinationChartComponent', () => {
  let component: CombinationChartComponent;
  let fixture: ComponentFixture<CombinationChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombinationChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombinationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
