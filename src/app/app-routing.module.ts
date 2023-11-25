import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { VatavaranComponent } from './vatavaran/vatavaran.component';

const routes: Routes = [
  {
    path : '',
    component : CounterComponent
  },
  {
    path : 'counter',
    component : CounterComponent
  },
  {
    path : 'vatavaran',
    component : VatavaranComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
