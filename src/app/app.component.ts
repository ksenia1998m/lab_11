import { Component } from '@angular/core';
import { Sensor } from './shared/models/sensor.model';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  sensors: Sensor[] = [];
  public i : number;
  constructor() {
    for(let i=0; i <= 9; i++) {
      this.sensors.push(new Sensor(i, `Датчик № ${i}`));  
    }
  }

  onDeleteSensor(idx: number) {
    this.sensors.splice(idx, 1);
  }

 
  onCreateSensor(new_name, new_status) { 
    let n; 
    if (new_name.value === ' '  || new_name.value === null){ 
    return false; 
    } else{
    if (this.sensors.length == 0){ 
    n = 1; this.sensors.push(new Sensor(n, new_name.value, new_status.checked));
    } 
    else{ 
    n =this.sensors[this.sensors.length - 1].id + 1; this.sensors.push(new Sensor(n, new_name.value, new_status.checked));
    }} 
    } 
    
  
    } 

    

 