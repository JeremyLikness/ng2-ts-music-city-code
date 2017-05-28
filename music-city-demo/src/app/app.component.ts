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

  constructor(public appSettings: AppSettingsService,
    public bifurcation: BifurcationService) {
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
    let canvas = this.canvasElem.nativeElement as HTMLCanvasElement;
    let context = canvas.getContext('2d');
    context.clearRect(0, 0, this.appSettings.width, this.appSettings.height);
    context.fillStyle = 'rgba(32, 64, 128, 0.75)';
    let points = this.bifurcation.BuildDiagram();
    points.forEach(point => context.fillRect(point.x, point.y, 2, 2));
  }
}
