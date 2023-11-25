import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vatavaran',
  templateUrl: './vatavaran.component.html',
  styleUrls: ['./vatavaran.component.scss']
})
export class VatavaranComponent implements OnInit {
  detailInfo: any;
  constructor() { }

  ngOnInit(): void {

  }

  //DATA STORED TO PASS IN DETAILS COMPONENT
  getData(data) {
    this.detailInfo = data;
  }

}