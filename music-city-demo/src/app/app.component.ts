import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

import { AppSettingsService } from './app-settings.service';
import { BifurcationService } from './bifurcation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BifurcationService]
})
export class AppComponent implements AfterViewInit {
  title = 'app works!';

  private _lowR = 0;
  private _highR = 0;

  public get lowR(): number {
    return this._lowR;
  }

  public set lowR(val: number) {
    if (val >= this.appSettings.minR && val < this._highR) {
      this._lowR = val;
    }
  }

  public get highR(): number {
    return this._highR;
  }

  public set highR(val: number) {
    if (val <= this.appSettings.maxR && val > this._lowR) {
      this._highR = val;
    }
  }

  constructor(public appSettings: AppSettingsService,
    public bifurcation: BifurcationService) {
      this._lowR = appSettings.lowR; 
      this._highR = appSettings.highR; 
  }

  public set iterations(val) {
    if (val > 0 && val <= 1000 && val !== this.appSettings.iterations) {
      this.appSettings.iterations = val;
      this.renderCanvas();
    }
  }

  @ViewChild('canvasElem')
  public canvasElem: ElementRef;

  ngAfterViewInit() {
    let canvas = this.canvasElem.nativeElement as HTMLCanvasElement;
    this.appSettings.width = canvas.width;
    this.appSettings.height = canvas.height;
    this.renderCanvas();
  }

  renderCanvas() {
    this.appSettings.lowR = this._lowR;
    this.appSettings.highR = this._highR;
    let canvas = this.canvasElem.nativeElement as HTMLCanvasElement;
    let context = canvas.getContext('2d');
    context.clearRect(0, 0, this.appSettings.width, this.appSettings.height);
    context.fillStyle = 'rgba(32, 64, 128, 0.75)';
    let points = this.bifurcation.BuildDiagram();
    points.forEach(point => context.fillRect(point.x, point.y, 2, 2));
  }
}
