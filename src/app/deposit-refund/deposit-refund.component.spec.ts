import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositRefundComponent } from './deposit-refund.component';

describe('DepositRefundComponent', () => {
  let component: DepositRefundComponent;
  let fixture: ComponentFixture<DepositRefundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositRefundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
