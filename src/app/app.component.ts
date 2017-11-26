import { Component, OnInit } from '@angular/core';
import { OpenweathermapService } from './services/openweathermap.service';

import { Observable } from 'rxjs/Observable';

import { NgbdButtonsRadio } from './components/buttons/buttons-radio';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private cities = [
    { id: 3983671, name: 'Santiago'},
    { id: 3688357, name: 'Buenos Aires' },
    { id: 3936456, name: 'Lima' },
    { id: 3448439, name: 'Sao Paulo' }
  ];
  logs = [];
  hideme = [];
  temp = 'c';
  timeUpdate: number;
  interval;

  constructor(private openweathermapService: OpenweathermapService) {}

  ngOnInit() {
    this.timeUpdate = 3;
    this.cities.forEach(res => {
      this.logs.push({ id: res.id, name: res.name, weathersdatas: [] });
      this.getWeatherCity(res.id);
    });

    this.interval = setInterval(() => {
      this.cities.forEach(res => {
        this.getWeatherCity(res.id);
      });
    }, this.timeUpdate * 1000);
  }

  updateInterval() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.cities.forEach(res => {
        this.getWeatherCity(res.id);
      });
    }, this.timeUpdate * 1000);
  }

  getWeatherCity(id: number): void {
    this.openweathermapService.getWeatherCity(id)
      .subscribe(res => {
        this.logs[this.logs.findIndex(i => i.id === id)]
          .weathersdatas.push({data: res, date: Date.now() });
      });
  }

  updateTemp(temp: string) {
    this.temp = temp;
  }
}
