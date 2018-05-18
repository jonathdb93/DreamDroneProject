import { DeviceServiceService } from './../device-service.service';
import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-device-controller',
  templateUrl: './device-controller.component.html',
  styleUrls: ['./device-controller.component.scss']
})
export class DeviceControllerComponent implements OnInit {

  batteryLevel: string;
  constructor(private deviceController: DeviceServiceService) { }

  ngOnInit() {
    this.batteryLevel  = "0";
  
    
    this.deviceController.GetBatteryLife().subscribe(res => this.batteryLevel = '93', r => this.batteryLevel = 'Unavailable');
  }

  StartFlying(){
    var result =  this.deviceController.StartDrone()
        .subscribe(res => console.log(res), error => console.log(error));
  }

  StopFlying(){
    var result = this.deviceController.StopDrone() 
    .subscribe(res => console.log(res), error => console.log(error));
  }



}
