import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pyramid3dChartComponent } from './pyramid3d-chart.component';

describe('Pyramid3dChartComponent', () => {
  let component: Pyramid3dChartComponent;
  let fixture: ComponentFixture<Pyramid3dChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pyramid3dChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pyramid3dChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
