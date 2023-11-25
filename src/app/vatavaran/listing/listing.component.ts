import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from '../../service/weather.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  recentLocations = [];
  addressInput: string = '';
  @Output() emitSelectedLocation: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient,
    private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  //CALLING API TO GET DATA FOR ENTERED LOCATION AND EMITTING FOR DETAILS COMP.
  onAddressChange(e) {
    this.getEnteredLocationInfo(this.addressInput);
  }

  getEnteredLocationInfo(location) {
    this.weatherService.getEnteredLocInfo(location).subscribe((data) => {

      let locationObj = {
        "name": location,
        "data": data
      }
      if (this.recentLocations.length < 8) {
        this.recentLocations.unshift(locationObj);
      }
      else {
        this.recentLocations.splice(this.recentLocations.length - 1, 1);
        this.recentLocations.unshift(locationObj);
      }
      this.addressInput = '';
      this.emitSelectedLocation.emit(data);
    }, err => {
      alert(err.error.message)
    })
  }

  //REMOVING CLICKED RECENT LOCATION ON TRASH BUTTON CLICK
  onRemoveRecentLoc(e, ind) {
    this.recentLocations.splice(ind, 1);
  }

  //CLEARING ALL RECENT LOCATIONS ON CLEAR BTN CLICK
  onClearRecentLoc() {
    this.recentLocations = [];
  }

  //CONVERTING FARENHITE INTO CELCIUS
  getTemperature(temp) {
    return (((temp - 32) * 5) / 9).toFixed(0) + 'C';
  }

}
