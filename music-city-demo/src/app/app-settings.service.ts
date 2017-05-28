import { Injectable } from '@angular/core';

@Injectable()
export class AppSettingsService {

  constructor() { }

  public width: number;
  public height: number; 
  public minR = 0; 
  public maxR = 4; 
  public lowR = 0; 
  public highR = 4;
  public iterations: number = 100;
}
