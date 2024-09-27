import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDatePickerComponent } from './simple-date-picker.component';

describe('SimpleDatePickerComponent', () => {
  let component: SimpleDatePickerComponent;
  let fixture: ComponentFixture<SimpleDatePickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleDatePickerComponent]
    });
    fixture = TestBed.createComponent(SimpleDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
