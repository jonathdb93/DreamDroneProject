import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceControllerComponent } from './device-controller.component';

describe('DeviceControllerComponent', () => {
  let component: DeviceControllerComponent;
  let fixture: ComponentFixture<DeviceControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
