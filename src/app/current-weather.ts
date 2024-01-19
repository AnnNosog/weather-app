import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentWeather {
  constructor(
    @Inject('cityName') public cityName: string,
    @Inject('temp') public temp: string,
    @Inject('icon') public icon: string,
    @Inject('weatherKing') public weatherKing: string,
    @Inject('tempMax') public tempMax: string,
    @Inject('tempMin') public tempMin: string
  ) {}
}