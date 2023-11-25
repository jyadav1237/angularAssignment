import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  headerCount = new BehaviorSubject<number>(0);
  constructor() { }

  updateData(newValue: number) {
    this.headerCount.next(newValue);
  }

}
