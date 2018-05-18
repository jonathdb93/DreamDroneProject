import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import { DeviceServiceService } from './device-service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceControllerComponent } from './device-controller/device-controller.component';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { GestureConfig } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule
    
  ],
  declarations: [DeviceControllerComponent],
  exports:[
    DeviceControllerComponent
  ]
  ,
  providers: [DeviceServiceService, [{ provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },]]
})
export class DeviceControllerModule { }
