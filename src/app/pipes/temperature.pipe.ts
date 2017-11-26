import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'tempConverter',
  pure: false
})
export class TemperatureConverterPipe implements PipeTransform {

  transform(value: number, unit: string): number {
    switch (unit) {
      case 'c':
        return Math.round(this.kelvinToCelsius(value) * 100) / 100;
      case 'f':
        return Math.round(this.kelvinToFahrenheit(value) * 100) / 100;
      default:
        return value;
    }
  }
  kelvinToFahrenheit( value: number) {
    return ((value - 273.15) * 1.8) + 32;
  }

  kelvinToCelsius(value: number) {
    return value - 273.15;
  }

  fahrenheitToCelsius(value: number) {
    return (value - 32) * 5 / 9;
  }

  celsiusToFahrenheit(value: number) {
    return value * 9 / 5 + 32;
  }
}
