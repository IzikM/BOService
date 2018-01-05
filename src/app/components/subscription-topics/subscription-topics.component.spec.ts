import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionTopicsComponent } from './subscription-topics.component';

describe('SubscriptionTopicsComponent', () => {
  let component: SubscriptionTopicsComponent;
  let fixture: ComponentFixture<SubscriptionTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
