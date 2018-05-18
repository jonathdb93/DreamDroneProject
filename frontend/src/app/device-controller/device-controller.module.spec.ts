import { DeviceControllerModule } from './device-controller.module';

describe('DeviceControllerModule', () => {
  let deviceControllerModule: DeviceControllerModule;

  beforeEach(() => {
    deviceControllerModule = new DeviceControllerModule();
  });

  it('should create an instance', () => {
    expect(deviceControllerModule).toBeTruthy();
  });
});
