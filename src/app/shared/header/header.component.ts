import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/service/counter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  totalCounter : number = 0;
  constructor(private counterService : CounterService) { }

  ngOnInit(): void {
    this.counterService.headerCount.subscribe((data) => {
      this.totalCounter = data;
    })
  }

}
