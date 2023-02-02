import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pie3dChartComponent } from './pie3d-chart.component';

describe('Pie3dChartComponent', () => {
  let component: Pie3dChartComponent;
  let fixture: ComponentFixture<Pie3dChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pie3dChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pie3dChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
