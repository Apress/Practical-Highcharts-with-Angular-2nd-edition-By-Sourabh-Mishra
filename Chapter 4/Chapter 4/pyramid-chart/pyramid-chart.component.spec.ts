import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyramidChartComponent } from './pyramid-chart.component';

describe('PyramidChartComponent', () => {
  let component: PyramidChartComponent;
  let fixture: ComponentFixture<PyramidChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PyramidChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PyramidChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
