import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

import {MessageService} from './message.service';
import {CurrentWeather} from './current-weather';
import {Forecast} from './forecast';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    constructor(private http: HttpClient,
                private messageService: MessageService) {
    }

    getWeatherByCity(city: string) {
        return this.http.get<CurrentWeather[]>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`).pipe(
            catchError(err => {return throwError(err);
            })
        );
    }

    fiveDayForecast(city: string) {
        return this.http.get<Forecast[]>(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric`).pipe(
            catchError(err => {return throwError(err);
            })
        );
    }

    log(message: string) {
        this.messageService.add(`${message}`);
    }
}