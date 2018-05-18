import { DeviceServiceService } from './../device-service.service';
import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { error } from '@angular/compiler/src/util';
import { ViewChild } from '@angular/core/src/metadata/di';
import { MatSlider } from '@angular/material/slider';

@Component({
  selector: 'app-device-controller',
  templateUrl: './device-controller.component.html',
  styleUrls: ['./device-controller.component.scss']
})
export class DeviceControllerComponent implements OnInit {

  batteryLevel: string;
  constructor(private deviceController: DeviceServiceService) { }
 // @ViewChild('ElevationSlider') elevationSlider: MatSlider;
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

  Stabilize(){
    this.deviceController.UpdateElevation(0);
   // this.elevationSlider.value = 0;
  }

  elevationChanged(e){
    console.log(e.value);
    this.deviceController.UpdateElevation(e.value);
  }

  GoLeft(){
      this.deviceController.Roll(-10,1000).subscribe();
  }

  GoRight(){
    this.deviceController.Roll(10,1000).subscribe();
  }

  GoForward(){
    this.deviceController.Pitch(10,1000).subscribe();
  }

  GoBackward(){
    this.deviceController.Pitch(-10,1000).subscribe();
  }

  Hold(){
    this.deviceController.Hold().subscribe();
  }

}
