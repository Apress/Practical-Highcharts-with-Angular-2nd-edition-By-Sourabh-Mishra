import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageChartComponent } from './image-chart.component';

describe('ImageChartComponent', () => {
  let component: ImageChartComponent;
  let fixture: ComponentFixture<ImageChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
