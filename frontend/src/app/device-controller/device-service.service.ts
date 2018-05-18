import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DeviceServiceService {
  private serverUrl = 'http://172.31.17.153:8080';
  constructor(private http: HttpClient) { 
  }

  StartDrone(){
    console.log('Starting drone on ' + this.serverUrl.concat('/start'));
    return this.http.get(this.serverUrl.concat('/start'));
  }

  StopDrone(){
    console.log('Stopping drone');
    return this.http.get(this.serverUrl.concat('/stop'));
  }

  EmergencyStop(): Observable<any>{
    console.log('Emergency stop!');
    return this.http.get<any>(this.serverUrl.concat('/emergency'));
  }

  GetBatteryLife(){
    return this.http.get(this.serverUrl.concat('/batteryLevel'));
  }
  
}
