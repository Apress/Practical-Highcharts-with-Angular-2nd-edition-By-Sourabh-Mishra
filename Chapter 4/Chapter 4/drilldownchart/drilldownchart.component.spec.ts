import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrilldownchartComponent } from './drilldownchart.component';

describe('DrilldownchartComponent', () => {
  let component: DrilldownchartComponent;
  let fixture: ComponentFixture<DrilldownchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrilldownchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrilldownchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
