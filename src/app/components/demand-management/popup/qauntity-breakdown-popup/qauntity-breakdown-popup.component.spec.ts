import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QauntityBreakdownPopupComponent } from './qauntity-breakdown-popup.component';

describe('QauntityBreakdownPopupComponent', () => {
  let component: QauntityBreakdownPopupComponent;
  let fixture: ComponentFixture<QauntityBreakdownPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QauntityBreakdownPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QauntityBreakdownPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
