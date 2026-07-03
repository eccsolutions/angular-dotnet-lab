import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { WeatherForecast } from "./weather-forecast";

@Injectable({
    providedIn: 'root'
})
export class WeatherForecastService {
    private readonly http = inject(HttpClient);
    private readonly baseUrl = '/api/weatherforecast';

    getForecasts(): Observable<WeatherForecast[]> {
        return this.http.get<WeatherForecast[]>(this.baseUrl);
    }
}