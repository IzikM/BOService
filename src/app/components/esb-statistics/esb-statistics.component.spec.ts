import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsbStatisticsComponent } from './esb-statistics.component';

describe('EsbStatisticsComponent', () => {
  let component: EsbStatisticsComponent;
  let fixture: ComponentFixture<EsbStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsbStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsbStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
