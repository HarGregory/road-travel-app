import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { MapPointsComponent } from './components/map-points/map-points.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HotelComponent } from './components/hotel/hotel.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { PlaceComponent } from './components/place/place.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from '@angular/material/icon';
import { EditeCardComponent } from './components/edite-card/edite-card.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapPointsComponent,
    HotelComponent,
    VehicleComponent,
    PlaceComponent,
    EditeCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
