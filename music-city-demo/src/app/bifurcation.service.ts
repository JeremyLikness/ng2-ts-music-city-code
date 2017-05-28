import { Injectable } from '@angular/core';
import { AppSettingsService } from './app-settings.service';

export interface IPoint {
  x: number;
  y: number;
}

@Injectable()
export class BifurcationService {

  constructor(public appSettings: AppSettingsService) { }

  public BuildDiagram(): IPoint[] {
    let result = [];
    let cache = {};
    let span = this.appSettings.highR - this.appSettings.lowR;
    for (let xcoord = 0; xcoord < this.appSettings.width; xcoord += 1) {
      let r = this.appSettings.lowR + (xcoord / this.appSettings.width) * span;
      let x = 0.5;
      for (let iteration = 0; iteration < this.appSettings.iterations; iteration += 1) {
        let xn = r * x * (1.0 - x);
        if (iteration > 10) {
          let point = {
            x: xcoord,
            y: this.appSettings.height - Math.floor(x * this.appSettings.height)
          }, key = `${point.x}-${point.y}`;
          if (!cache[key]) {
            result.push(point);
            cache[key] = true;
          }
        }
        x = xn;
      }
    }
    return result;
  }

}
