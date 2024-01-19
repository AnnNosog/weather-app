import {Component, OnInit, Input} from '@angular/core';
import {CurrentWeather} from '../current-weather';

@Component({
    selector: 'wa-current',
    templateUrl: './current.component.html',
    styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit {
    @Input() weather: CurrentWeather | undefined;

    constructor() {
    }

    ngOnInit() {
        if (typeof this.weather === 'undefined') {
            this.weather = new CurrentWeather('', '', '', '', '', '');
        }
    }
}