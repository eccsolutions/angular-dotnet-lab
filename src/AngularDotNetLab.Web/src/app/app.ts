import { Component, inject, signal } from '@angular/core';

import { WeatherForecast } from './weather-forecast';
import { WeatherForecastService } from './weather-forecast.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly weatherForecastService = inject(WeatherForecastService);

  protected readonly title = signal('AngularDotNetLab.web');
  protected readonly forecasts = signal<WeatherForecast[]>([]);
  protected readonly isLoading = signal(false);
  protected readonly errorMessage = signal<string | null>(null);

  constructor() {
    this.loadForecasts();
  }

  private loadForecasts(): void {
    this.isLoading.set(true);
    this.errorMessage.set(null);

    this.weatherForecastService.getForecasts().subscribe({
      next: forecasts => {
        this.forecasts.set(forecasts);
        this.isLoading.set(false);
      },
      error: err => {
        console.error('Failed to load weather forecasts', err);
        this.errorMessage.set('Unable to load weather forecasts.');
        this.isLoading.set(false);
      }
    })
  }
}
