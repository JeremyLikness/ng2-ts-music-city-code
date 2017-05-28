import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

import { AppSettingsService } from './app-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app works!';

  constructor(public appSettings: AppSettingsService) {

  }

  @ViewChild('canvasElem')
  public canvasElem: ElementRef;

  ngAfterViewInit() {
    let canvas = this.canvasElem.nativeElement as HTMLCanvasElement;
    this.appSettings.width = canvas.width;
    this.appSettings.height = canvas.height;
    let context = canvas.getContext('2d');
    context.fillStyle = 'rgba(32, 64, 128, 0.75)';
    context.fillRect(10, 10, 100, 100);
  }
}
