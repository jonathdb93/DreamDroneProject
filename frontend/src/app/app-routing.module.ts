import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { DeviceControllerComponent } from 'src/app/device-controller/device-controller/device-controller.component';

const routes: Routes = [
  {path: 'home' , component: AppComponent },
  {path: 'device', component: DeviceControllerComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }