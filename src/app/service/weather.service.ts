import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }

  getWeatherData(lat, log) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${'d4594364698122bfd1c4b3eb5f2ff19f'}`);
  }

  // getDailyForcasting() {
  //   return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${33.44}&lon=${-94.04}&appid=${'d4594364698122bfd1c4b3eb5f2ff19f'}`);
  // }

  getEnteredLocInfo(location) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${'d4594364698122bfd1c4b3eb5f2ff19f'}`);
  }
}
