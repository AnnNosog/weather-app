import {Component, Input, OnInit} from '@angular/core';
import {Forecast} from '../forecast';

@Component({
  selector: 'wa-forecast-item',
  templateUrl: './forecast-item.component.html',
  styleUrls: ['./forecast-item.component.scss']
})
export class ForecastItemComponent implements OnInit {
  @Input() day: Forecast | undefined;
  constructor() { }

  ngOnInit() {
  }

}