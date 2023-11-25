import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from '../../service/weather.service';
import * as moment from 'moment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnChanges  {
  weatherData: any;
  forecastAllData: any = [];
  sortedForecastData: any = [];
  loading : boolean = false;
  @Input() detailInfo;
  constructor(private http: HttpClient,
    private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  //DETECTING CHANGES WHEN USER ENTERS A NEW LOCATION
  ngOnChanges(changes: SimpleChanges) {
    if(changes.detailInfo.currentValue){
      this.loading = true;
      this.sortedForecastData = [];
      this.detailInfo = changes.detailInfo.currentValue;
      this.headerData(changes.detailInfo.currentValue.city.coord);
    }
  }

  //GETTING HEADER INFO
  headerData(geoLoc){
    this.weatherService.getWeatherData(geoLoc.lat, geoLoc.lat).subscribe((res) => {
      this.weatherData = res;
      this.forecastData(this.detailInfo);
    })
  }

  forecastData(data){
    this.forecastAllData = data;
      const currentDate = new Date().getDate();
      const allDates = this.forecastAllData.list.map(item => moment(item.dt_txt).date());
      let uniqueDates = [...new Set(allDates)];
      uniqueDates = uniqueDates.filter(e => e != currentDate);
      uniqueDates.forEach((element) => {
        let data = this.forecastAllData.list.findLastIndex((item) => moment(item.dt_txt).date() === element);
        this.sortedForecastData.push(this.forecastAllData.list[data]);
      })
      this.loading = false;
  }
  
  getWeatherIcon() {
    return `assets/images/weatherIcons/${this.weatherData.weather[0].main}.svg`;
  }

  getTemperature(temp) {
    return (((temp - 32) * 5) / 9).toFixed(0) + 'C';
  }

  getDate(date) {
    return moment(date).date();
  }

}
