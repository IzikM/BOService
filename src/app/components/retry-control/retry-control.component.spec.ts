import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetryControlComponent } from './retry-control.component';

describe('RetryControlComponent', () => {
  let component: RetryControlComponent;
  let fixture: ComponentFixture<RetryControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetryControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetryControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
