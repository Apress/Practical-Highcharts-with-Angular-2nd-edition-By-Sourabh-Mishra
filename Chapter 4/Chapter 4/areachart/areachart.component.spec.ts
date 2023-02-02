import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreachartComponent } from './areachart.component';

describe('AreachartComponent', () => {
  let component: AreachartComponent;
  let fixture: ComponentFixture<AreachartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreachartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreachartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
