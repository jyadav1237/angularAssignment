import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { VatavaranComponent } from './vatavaran/vatavaran.component';
import { HeaderComponent } from './shared/header/header.component';
import { DetailsComponent } from './vatavaran/details/details.component';
import { ListingComponent } from './vatavaran/listing/listing.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    VatavaranComponent,
    HeaderComponent,
    DetailsComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
