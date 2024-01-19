import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { CurrentComponent } from './current/current.component';
import { ForecastComponent } from './forecast/forecast.component';
import { weatherRouting } from './weather.routing';
import { WeatherService } from './weather.service';
import { ForecastItemComponent } from './forecast-item/forecast-item.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthenticationInterceptor} from './auth';

@NgModule({
  declarations: [
    AppComponent,
    CurrentComponent,
    ForecastItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    weatherRouting,
    ReactiveFormsModule,
    MessagesComponent
  ],
  providers: [WeatherService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }