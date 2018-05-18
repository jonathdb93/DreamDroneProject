import { HttpClientModule } from '@angular/common/http';
import { DeviceServiceService } from './device-service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceControllerComponent } from './device-controller/device-controller.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [DeviceControllerComponent],
  exports:[
    DeviceControllerComponent
  ]
  ,
  providers: [DeviceServiceService]
})
export class DeviceControllerModule { }
