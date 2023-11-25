import { Component, OnInit } from '@angular/core';
import { CounterService } from '../service/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counterList = []
  constructor(private counterService : CounterService) {
    
  }

  ngOnInit(): void {

  }

  onAddNewCounterList (){
    const obj = {
      id : this.counterList.length + 1,
      count : 0
    }
    this.counterList.push(obj);
    this.counterService.updateData(this.counterList.length);
  }

  onIncrement(data, index){
    this.counterList[index].count = ++data.count;
  }

  onDecrement(data, index){
    this.counterList[index].count = --data.count
  }

  onDelete(data, index){
    this.counterList.splice(index, 1);
    this.counterService.updateData(this.counterList.length);
  }

  onReset(){
    this.counterList = [];
    this.counterService.updateData(this.counterList.length);
  }

}
